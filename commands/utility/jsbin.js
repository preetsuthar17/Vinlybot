const { Client, Message, MessageEmbed } = require("discord.js");
const messagae = require("discord.js");
const { create } = require("sourcebin");
module.exports = {
  name: "jsbin",
  aliases: ["jssourcebin"],
  description: "Make a bin from your javascript code!",
  usage: `rex jsbin <text>`,
  timeout: 4000,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const content = args.join(" ");
    if (!content)
      return message.noMentionReply(
        new MessageEmbed()
          .setDescription(
            "<a:FHT_Cross:860848296154628096> plese provide content to make a bin out of it!"
          )
          .setColor("#303136")
      );

    create(
      [
        {
          name: `Code by ${message.author.tag}`,
          content,
          language: "javascript",
        },
      ],
      {
        title: "Javascript code",
      }
    ).then((value) => {
      message.noMentionReply(
        `<a:FHT_Correct:860848302227718184> I have created  a bin for javascript: ${value.url}`
      );
    });
  },
};
