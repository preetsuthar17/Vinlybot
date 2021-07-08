const { Client, Message, MessageEmbed } = require("discord.js");
const pritu = require("pritulx");
const ReactionPages = pritu.ReactionPages;
// const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "pages",
  usage: "rex pages",
  description: "Test command for discord pagination",
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
  description: "",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const embed1 = new MessageEmbed().setDescription("page 1");
    const embed2 = new MessageEmbed().setDescription("page 2");
    const pages = [embed1, embed2];
    const textPageChange = true;
    const emojis = ["⏪", "⏩"];
    const time = 30000;
    ReactionPages(message, pages, textPageChange, emojis, time);
  },
};
