const { Client, Message, MessageEmbed } = require("discord.js");
const math = require("mathjs");

module.exports = {
  name: "math",
  aliases: [""],
  description: "Do some math sum!",
  usage: `rex math <query>`,
  timeout: 3000,
  userPermissions: [""],
  botPermissions: [""],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    try {
      message.noMentionReply(
        new MessageEmbed()
          .addField("Question: ", args.join(" "))
          .addField("Solution: ", math.evaluate(args.join(" ")))
      );
    } catch (err) {
      message.noMentionReply("Your question is not valid!");
    }
  },
};
