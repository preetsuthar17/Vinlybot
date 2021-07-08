const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "sreply",
  category: "suggestion",
  description: "Give a reply to suggestion",
  usage: "rex sreply <message_id> <reply>",
  run: async (client, message, args) => {
    let channel = await db.fetch(`suggestion_${message.guild.id}`);
    if (channel === null) return;

    if (!message.member.hasPermission("MANAGE_GUILD")) return;

    const rgx = /^(?:<@!?)?(\d+)>?$/;

    const messageID = args[0];
    const replyQuery = args.slice(1).join(" ");

    const number = new MessageEmbed()
      .setDescription(
        `<:bfdno:832931445991276584>    | I don't think that was a Message ID!`
      )
      .setColor("#303136");

    const id = new MessageEmbed()
      .setDescription(
        `<:bfdno:832931445991276584>  |You forgot to specify Message ID!`
      )
      .setColor("#303136");

    const query = new MessageEmbed()
      .setDescription(
        `<:bfdno:832931445991276584>   | You forgot to specify the Reply!`
      )
      .setColor("#303136");

    const reply = new MessageEmbed()
      .setDescription(
        `<:bfdyes:832931453892558848>  | Successfully Replied the Suggestion.`
      )
      .setColor("#303136");

    const noChannel = new MessageEmbed()
      .setDescription(
        `<:bfdno:832931445991276584>   | No Suggestion Channel found!`
      )
      .setColor("#303136");

    const noMessage = new MessageEmbed()
      .setDescription(
        `<a:FHT_Cross:860848296154628096> Didn't find any Message with that ID!`
      )
      .setColor("#303136");

    if (!messageID) return message.noMentionReply(id);

    if (!rgx.test(messageID)) return message.noMentionReply(number);

    if (!replyQuery) return message.noMentionReply(query);

    try {
      const suggestionChannel = message.guild.channels.cache.get(channel);

      if (!suggestionChannel) return message.noMentionReply(noChannel);

      const suggestedEmbed = await suggestionChannel.messages
        .fetch(messageID)
        .catch((error) => {
          const noMessage = new MessageEmbed()
            .setDescription(
              `<a:FHT_Cross:860848296154628096> Didn't find any Message with that ID!`
            )
            .setColor("#303136");
          return message.noMentionReply(noMessage);
        });

      const data = suggestedEmbed.embeds[0];

      const replyEmbed = new MessageEmbed()
        .setAuthor(`${data.author.name}`, data.author.iconURL)
        .setDescription(data.description)
        .setColor("#303136")
        .addField(`Reply from ${message.author.tag}`, replyQuery)
        .setFooter("Status: Replied")
        .setTimestamp();

      suggestedEmbed.edit(replyEmbed);

      message.noMentionReply(reply);

      const user = await client.users.cache.find(
        (u) => u.tag === data.author.name
      );

      const embed = new MessageEmbed()
        .setDescription(
          `You have got a Reply over your Suggestion. **[Message Link](https://discord.com/channels/${message.guild.id}/${channel}/${messageID})**`
        )
        .setColor("#303136");
      user.send(embed);
    } catch (err) {
      return;
    }
  },
};
