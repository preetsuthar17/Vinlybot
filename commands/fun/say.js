const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "say",
  usage: "rex say",
  ownerOnly: false,
  cooldown: 3000,

  botPermission: [
    "VIEW_CHANNELS",
    "SEND_MESSAGES",
    "EMBED_LINKS",
    "ATTACH_FILES",
  ],
  authorPermission: [""],
  aliases: ["quickembed", "embed"],
  description: "Make a quick embed!",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const text = args.slice(0).join(" ");

    if (!text) return message.channel.send("Please provide text to say!");
    else
      return message.channel.send(
        new MessageEmbed()
          .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL())
          .setDescription(text)
          .setColor("303136")
      );
  },
};
