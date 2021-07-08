const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "addrole",
  aliases: ["role"],
  category: "moderation",
  description: "Add role to any user",
  usage: "rex addrole <member> <role>",

  run: async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.noMentionReply(
        "**You Dont Have The Permissions To Add Roles To Users! - [MANAGE_ROLES]**"
      );
    if (!message.guild.me.hasPermission("MANAGE_ROLES"))
      return message.noMentionReply(
        "**I Dont Have The Permissions To Add Roles To Users! - [MANAGE_ROLES]**"
      );

    if (!args[0]) return message.noMentionReply("**Please Enter A Role!**");

    let rMember =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find(
        (r) => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()
      ) ||
      message.guild.members.cache.find(
        (ro) => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase()
      );
    if (!rMember) return message.noMentionReply("**Please Enter A User Name!**");
    if (
      rMember.roles.highest.comparePositionTo(message.guild.me.roles.highest) >=
      0
    )
      return message.noMentionReply("**Cannot Add Role To This User!**");

    let role =
      message.mentions.roles.first() ||
      message.guild.roles.cache.get(args[1]) ||
      message.guild.roles.cache.find(
        (rp) =>
          rp.name.toLowerCase() === args.slice(1).join(" ").toLocaleLowerCase()
      );
    if (!args[1]) return message.noMentionReply("**Please Enter A Role!**");

    if (!role) return message.noMentionReply("**Could Not Find That Role!**");

    if (role.managed)
      return message.noMentionReply("**Cannot Add That Role To The User!**");
    if (message.guild.me.roles.highest.comparePositionTo(role) <= 0)
      return message.noMentionReply(
        "**Role Is Currently Higher Than Me Therefore Cannot Add It To The User!**"
      );

    if (rMember.roles.cache.has(role.id))
      return message.noMentionReply("**User Already Has The Role!**");
    if (!rMember.roles.cache.has(role.id)) await rMember.roles.add(role.id);
    var sembed = new MessageEmbed()
      .setColor("#303136") 
      .setAuthor(message.guild.name, message.guild.iconURL())
      .setDescription(`Role has been added to ${rMember.user.username}`);
    message.noMentionReply(sembed);

    let channel = db.fetch(`modlog_${message.guild.id}`);
    if (!channel) return;

    const embed = new MessageEmbed()
      .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
      .setColor("#303136") 
      .setThumbnail(rMember.user.displayAvatarURL({ dynamic: true }))
      .setFooter(message.guild.name, message.guild.iconURL())
      .addField("**Moderation**", "addrole")
      .addField("**Added Role to**", rMember.user.username)
      .addField("**Role Added**", role.name)
      .addField("**Added By**", message.author.username)
      .addField("**Date**", message.createdAt.toLocaleString())
      .setTimestamp();

    let sChannel = message.guild.channels.cache.get(channel);
    if (!sChannel) return;
    sChannel.send(embed);
  },
};
