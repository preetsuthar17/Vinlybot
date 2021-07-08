const discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kick anyone with one shot xD",
  usage: "rex kick <member> [reason]",
  run: (client, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) {
      return message.noMentionReply(
        `**${message.author.username}**, You do not have enough permission to use this command`
      );
    }

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.noMentionReply(
        `**${message.author.username}**, I do not have enough permission to use this command`
      );
    }

    let target = message.mentions.members.first();

    if (!target) {
      return message.noMentionReply(
        `**${message.author.username}**, Please mention the person who you want to kick`
      );
    }

    if (target.id === message.author.id) {
      return message.noMentionReply(
        `**${message.author.username}**, You can not kick yourself`
      );
    }

    if (!args[1]) {
      return message.noMentionReply(
        `**${message.author.username}**, Please Give Reason to ban`
      );
    }

    let embed = new discord.MessageEmbed()
      .setTitle("Action: Kick")
      .setDescription(`Banned ${target} (${target.id})`)
      .setColor("#303136")
      .setFooter(`Banned by ${message.author.username}`);

    message.noMentionReply(embed);

    target.kick(args[1]);
  },
};
