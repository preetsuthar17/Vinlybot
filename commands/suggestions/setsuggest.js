const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "setsuggest",
  category: "suggestion",
  usage: "rex setsuggest <#channel>",
  authorPermission: ["MANAGE_GUILD"],
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD")) {
      return message.noMentionReply(
        `You Don't Have Permission To Use This Command! Manage server`
      );
    }
    let Channel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0]);

    if (!Channel)
      return message.noMentionReply(
        `<a:FHT_Cross:860848296154628096> Please Mention A Channel!`
      );

    if (Channel.type === "voice")
      return message.noMentionReply(
        `<a:FHT_Cross:860848296154628096> Please Mention A Text Channel!`
      );

    await db.set(`suggestion_${message.guild.id}`, Channel.id);

    let Embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription(
        ` <a:FHT_Correct:860848302227718184> Suggestion Channel is set as <#${Channel.id}>`
      );

    return message.noMentionReply(Embed);
  },
};
