const { Client, message, MessageEmbed } = require("discord.js");
const Random = require("srod-v2");

module.exports = {
  name: "clyde",
  aliases: [""],
  description: "WhooHoo  Clyde sent something!",
  usage: `rex clyde <message>`,
  timeout: 4000,
  botPermissions: ["ATTACH_FILES", "EMBED_LINKS"],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const Message = args.join(" ");
    const Data = await Random.Clyde({ Message, Color: "RED" });
    return message.noMentionReply(Data);
  },
};
