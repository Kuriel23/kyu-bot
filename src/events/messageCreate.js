const discord = require("discord.js");

module.exports = async (client, message) => {
  if (message.guild === null) return;
  if (message.channel.id === "1028714676978208939") message.crosspost();

  if (message.guild.id === process.env.GUILD_ID) {
    //if (!message.member.permissions.has("Administrator")) return;
    if (message.content.includes("k?embsup")) {
      message.delete();
      let emb = new discord.EmbedBuilder()
        .setColor(client.cor)
        .setTitle("Central de Ajuda do Wondeful <a:zz_lua:983998053700734976>")
        .setDescription(
          "Aqui é o lugar aonde você pode tirar suas dúvidas e entrar em contato com nossa equipe da Staff em atendimento privado.\n\nEsteja ciente que abrir algum atendimento de forma indevida poderá acarretar em más consequências."
        )
        .setImage("https://i.imgur.com/QZidlFB.gif");
      let menu = new discord.ActionRowBuilder().setComponents(
        new discord.SelectMenuBuilder()
          .setCustomId("suporte")
          .setPlaceholder("Em que podemos ajudar-lhe?")
          .addOptions(
            {
              label: "Denunciar",
              description: "Clique para fazer uma denúncia!",
              value: "denunciar",
              emoji: "984023754554347540",
            },
            {
              label: "Sugestão",
              description: "Saiba aonde mandar sua sugestão.",
              value: "sugestão",
              emoji: "984024420068761640",
            },
            {
              label: "Reportar bug",
              description: "Clique para reportar um erro no servidor.",
              value: "bug",
              emoji: "984025439133642792",
            },
            {
              label: "Parcerias",
              description: "Solicite algum tipo de parceria.",
              value: "parcerias",
              emoji: "984025929800097832",
            },
            {
              label: "Seja vip",
              description: "Solicite seu vip aqui.",
              value: "vip",
              emoji: "984061174222049352",
            },
            {
              label: "Seja staff",
              description: "Informações de recrutamento para a staff.",
              value: "staff",
              emoji: "984027063621144606",
            },
            {
              label: "Resgatar recompensa",
              description: "Solicite seu prêmio de evento/sorteio aqui.",
              value: "recompensa",
              emoji: "984028403340574720",
            },
            {
              label: "Dúvidas não sanadas",
              description: "Atendimento no geral.",
              value: "duvidas",
              emoji: "984031676080472074",
            }
          )
      );
      message.channel.send({ embeds: [emb], components: [menu] });
    }
    if (message.content.startsWith(`<@${client.user.id}>`)) {
      let embed = new discord.EmbedBuilder()
        .setTitle("Kyu Control - A fast and efficient control")
        .setDescription(
          "Controle a adesão de novos servidores, comandos de desenvolvimento tudo num menu de controlo rápido e eficiente!"
        )
        .setColor(client.cor);
      let row = new discord.ActionRowBuilder().addComponents(
        new discord.SelectMenuBuilder()
          .setCustomId("control")
          .setPlaceholder("Controle tudo imediatamente!")
          .addOptions({
            label: "Faça evaluate de um código (dev only)",
            description: "Cuidado isto pode ser perigoso!",
            value: "eval",
            emoji: "1026116730969395311",
          })
      );
      message.reply({ embeds: [embed], components: [row] });
    }
  }
};
