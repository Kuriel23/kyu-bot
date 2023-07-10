module.exports = (client, interaction) => {
  if (interaction.isSelectMenu()) {
    require("../menu/" + interaction.values[0])(client, interaction);
  }
  if (interaction.isChatInputCommand()) {
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
      client.db.Guilds.findOne(
        { _id: interaction.guild.id },
        function (err, guild) {
          if (err) return interaction.reply(err);
          if (!guild) {
            new client.db.Guilds({ _id: interaction.guild.id }).save();
            return interaction.reply(
              "Este servidor está sendo cadastrado em nosso banco de dados, tente novamente."
            );
          }
          if (guild.approved === false)
            return interaction.reply(
              "Este servidor não foi aprovado pela nossa rede ainda e por agora têm um pacote de Proteção Básica - isto é, você não tem acesso a comandos nenhuns porém eu banirei pessoas de outros servidores no seu!\n\n<:stats:1026116738145853470> Mas você gostaria de seu servidor ter acesso ás incríveis funções de toda a rede com o pacote Proteção Avançada?\nContacte o `Kuriel#1411` na DM para saber mais sobre como entrar dentro da rede."
            );
          command.execute(interaction, client);
        }
      );
    } catch (err) {
      if (err) console.error(err);
      interaction.reply({
        content: "Um erro foi executado no meu grande algoritmo.",
        ephemeral: true,
      });
    }
  }
};
