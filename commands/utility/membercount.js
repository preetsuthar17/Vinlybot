const { Client, Message, MessageEmbed } = require("discord.js");
module.exports = {
  name: "membercount",
  description: "Gives you total numbers of members from server!",
  aliases: ["mc", "members", "users"],
  usage: `rex membercount`,
  timeout: 4000,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
      .setTitle(`${message.guild.name}`)
      .setColor("#303136")
      .setDescription(`Member Count: ${message.guild.memberCount}`);
    message.noMentionReply(embed);
  },
};
