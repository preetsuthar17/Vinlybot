const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: `invite`,
  description: "gives you invite link of bot!",
  aliases: [""],
  usage: `rex invite`,
  botPermissions: ["EMBED_LINKS"],
  timeout: 4000,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
      .setFooter(`Requested by ${message.author.tag}`)
      .setTimestamp()
      .setColor("#303136")
      .setDescription(
        "[Click Here to Invite me](https://discord.com/oauth2/authorize?client_id=856131755898437632&permissions=8&scope=bot%20applications.commands)\n[Click Here to join Support Server](https://discord.io/prituhq)"
      );
    message.noMentionReply(embed);
  },
};
