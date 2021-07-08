const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "nuke",
  aliases: ["clearchannel"],
  description: "Purge all messages of channel!",
  usage: `rex nuke`,
  userPermissions: ["ADMINISTRATOR"],
  botPermissions: ["ADMINISTRATOR"],
  timeout: 4000,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    message.channel.clone().then((ch) => {
      ch.setParent(message.channel.parent.id);
      ch.setPosition(message.channel.position);
      setTimeout(() => message.channel.delete(), 1);
      ch.send(
        new MessageEmbed()
          .setTitle(`This channel is nuked by ${message.author.tag}`)
          .setImage(
            "https://media1.tenor.com/images/471289cde2490c80f60d5e85bcdfb6da/tenor.gif?itemid=8911364"
          )
      );
    });
  },
};
