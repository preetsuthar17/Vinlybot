const { MessageEmbed, Client, Message } = require("discord.js");
const discord = require("discord.js");
const MessageAttachment = require("discord.js");
const { API } = require("cool-image-api-wrapper");
const api = new API();

module.exports = {
  name: "discordmsg",
  aliases: [""],
  description: "Make your given text as discord message by you !",
  usage: `rex discordmsg <text>`,
  timeout: 4000,
  botPermissions: ["ATTACH_FILES", "EMBED_LINKS"],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    message.react("<:dot:860848255574736947>");

    await api
      .discord_message(
        args.join(" "),
        "#ffffff",
        `${message.author.username}`,
        `${message.author.displayAvatarURL({ dynamic: true, format: "png" })}`
      )

      .then((data) => {
        console.log(data);
        const attachment = new discord.MessageAttachment(data);
        message.noMentionReply(attachment);
      })

      .catch((e) => {
        console.log(e);
      });
  },
};
