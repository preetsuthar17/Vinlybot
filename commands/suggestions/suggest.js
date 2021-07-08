const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "suggest",
  category: "suggestion",
  description: "Suggest something.",
  usage: "rex suggest <suggestion>",

  run: async (client, message, args) => {
    let channel = await db.fetch(`suggestion_${message.guild.id}`);
    if (channel === null)
      return message.noMentionReply(
        "<a:FHT_Cross:860848296154628096> No suggestion channel has been setup yet!"
      );

    const suggestionQuery = args.join(" ");
    if (!suggestionQuery)
      return message.noMentionReply(
        "<a:FHT_Cross:860848296154628096> Please Suggest Something."
      );

    const embed = new MessageEmbed()

      .setAuthor(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setDescription(`${suggestionQuery}`)
      .setColor("#303136")
      .setFooter("Status: Pending")
      .setTimestamp();

    const done = new MessageEmbed()
      .setDescription(
        ` <a:FHT_Correct:860848302227718184> | Your suggestion is Submitted, \n\nNote: You agreed to get a DM on a reply over your Suggestion!`
      )
      .setColor("#303136");

    message.noMentionReply(done);

    let msgEmbed = await message.guild.channels.cache.get(channel).send(embed);

    await msgEmbed.react("👍");
    await msgEmbed.react("👎");
  },
};
