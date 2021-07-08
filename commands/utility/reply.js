const { Client, Message, MessageEmbed } = require("discord.js");
const discord = require("discord.js");
require("discord-inline"); //☣️ IMPORTANT: put this before your discord.Client()

module.exports = {
  name: "reply",
  usage: "rex reply",
  ownerOnly: false,
  cooldown: 3000,
  botPermission: [
    "VIEW_CHANNELS",
    "SEND_MESSAGES",
    "EMBED_LINKS",
    "ATTACH_FILES",
  ],
  authorPermission: [""],
  aliases: [""],
  description: "Reply",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    message.noMentionReply("No u");
  },
};
