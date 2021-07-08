const { Client, Message, MessageEmbed } = require("discord.js");
const messagae = require("discord.js");
const { create } = require("sourcebin");
module.exports = {
  name: "pybin",
  aliases: ["pysourcebin"],
  description: "Make a bin from your python code!",
  usage: `rex pybin <text>`,
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
          .setDescription("plese provide content to make a bin out of it!")
          .setColor("#303136")
      );

    create(
      [
        {
          name: `Code by ${message.author.tag}`,
          content,
          language: "python",
        },
      ],
      {
        title: "Python code",
      }
    ).then((value) => {
      message.noMentionReply(`I have created a bin for python: ${value.url}`);
    });
  },
};
