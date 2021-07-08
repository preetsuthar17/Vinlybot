const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "modnick",
  aliases: ["moderate-nick"],
  description: "Change unmentionable name to something mentionable!",
  usage: `rex modnick <member>`,
  timeout: 2000,
  userPermissions: ["MANAGE_NICKNAMES"],
  botPermissions: ["MANAGE_NICKNAMES"],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const member = message.mentions.members.first();
    if (!member)
      return message.noMentionReply("Please mention member to moderate nickname!");
    const random = (length = 20);
    const randomText = "sdfsfedawsterftfdsrawer234df12345678900987654321";
    var randomNick =
      Math.floor(Math.random() * randomText.length) +
      Math.floor(Math.random() * 72323);
    // message.noMentionReply(`I rate you ${randomNick}`);
    member.setNickname(`Moderated Nickname ${randomNick}`);
  },
};
