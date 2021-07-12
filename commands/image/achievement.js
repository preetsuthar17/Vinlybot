const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "achievement",
  aliases: [""],
  description: "Make super cool minecraft Achievement!!",
  usage: `rex achievement <text>`,
  timeout: 4000,

  botPermissions: ["ATTACH_FILES", "EMBED_LINKS"],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    message.react("<:dot:860848255574736947>");
    const text = args.join(" ");
    const base = "https://api.cool-img-api.ml/";
    const url = base + `achievement?text=${encodeURIComponent(text)}`;
    if (text > 22 || text < 1)
      return message.noMentionReply(
        new MessageEmbed()
          .setDescription(
            "Please input Text between 1 and 22 to make an Achievement!"
          )
          .setColor("#303136")
      );
    else if (!text)
      message.noMentionReply(
        new MessageEmbed()
          .setDescription("Please provide text to make an Achievement!")
          .setColor("#303136")
      );
    await message.noMentionReply(url);
  },
};
