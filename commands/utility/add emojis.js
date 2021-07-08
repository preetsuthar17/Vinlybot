const { Client, Message, MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
// const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "add-emojis",
  usage: "rex add-emojis <emoji1 emoji2 ...>",
  description: "Added multiple emojis at once!s",
  ownerOnly: false,
  cooldown: 3000,
  botPermission: [
    "VIEW_CHANNELS",
    "SEND_MESSAGES",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "MANAGE_EMOIJIS",
  ],
  authorPermission: ["MANAGE_EMOJIS"],
  aliases: ["add-these-emojis"],
  description: "",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_EMOJIS")) {
      return message.noMentionReply(
        `:x: | **You Don't Have Permission To Use This Command**`
      );
    }
    const emojis = args.join(" ").match(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/gi);
    if (!emojis) return message.noMentionReply(`:x: | **Provde The emojis to add**`);
    emojis.forEach((emote) => {
      let emoji = Discord.Util.parseEmoji(emote);
      if (emoji.id) {
        const Link = `https://cdn.discordapp.com/emojis/${emoji.id}.${
          emoji.animated ? "gif" : "png"
        }`;
        message.guild.emojis
          .create(`${Link}`, `${`${emoji.name}`}`)
          .then((em) => message.noMentionReply(em.toString() + " added!"))
          .catch((error) => {
            message.noMentionReply("Something went wrong!!");
            console.log(error);
          });
      }
    });
  },
};
