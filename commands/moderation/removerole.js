const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "removerole",
  aliases: ["rmrole", "rrole"],
  category: "moderation",
  description: "Remove role from any user",
  usage: "rex removerole <member> <role>",
  run: async (client, message, args) => {
    let target = message.mentions.members.first();

    if (!target) return message.noMentionReply(`I am unable to find the user`);

    let rrole = message.mentions.roles.first();

    if (!rrole) return message.noMentionReply(`I am unable to find the role`);

    let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });

    const embed = new MessageEmbed()
      .setAuthor(target.user.username, ticon)
      .setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
      .setColor("#303136")
      .setDescription(`${rrole} role removed from ${target}`)
      .setFooter(`Role added by ${message.author.username}`, aicon)
      .setTimestamp();

    await message.noMentionReply(embed);

    target.roles.remove(rrole);
  },
};
