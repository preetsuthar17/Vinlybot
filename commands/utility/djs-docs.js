const { Client, Message, MessageEmbed } = require("discord.js");
const doc = require("djsdocs");
module.exports = {
  name: "djs",
  aliases: ["docs", "djs-docs"],
  description:
    "Give you fetched information from discord.js official Documentation",
  usage: `rex docs <query>`,
  timeout: 4000,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const data = await doc.get(args.join(" "), message);
    message.noMentionReply(data);
  },
};
