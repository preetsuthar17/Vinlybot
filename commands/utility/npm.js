const { Client, Message, MessageEmbed } = require("discord.js");
const random = require("something-random-on-discord").Random;

module.exports = {
  name: "npm",
  aliases: ["npm-info"],
  description: "Returns you with information about given npm package!",
  usage: `rex npm <package_name>`,
  timeout: 4000,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    let data = await random.getNPM(args.join(" "));
    message.noMentionReply(data);
  },
};
