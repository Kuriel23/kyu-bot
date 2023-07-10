const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("unban")
    .setNameLocalizations({
      "pt-BR": "desbanir",
      "en-US": "unban",
    })
    .setDescription("Retire o banimento de uma pessoa por id.")
    .setDefaultMemberPermissions(discord.PermissionFlagsBits.BanMembers)
    .addStringOption((option) =>
      option
        .setName("usuário")
        .setNameLocalizations({ "pt-BR": "usuário", "en-US": "user" })
        .setDescription("Identifique o usuário")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const user = interaction.options.getString("usuário");
    const user_fetched = await client.fetchUser();
    await interaction.guild.members
      .unban(user)
      .then(
        interaction.reply({
          content: `${user_fetched.username} foi desbanido com sucesso.`,
        })
      )
      .catch(() =>
        interaction.reply({
          content: "Aconteceu um erro desconhecido.",
        })
      );
  },
};
