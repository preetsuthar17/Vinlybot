const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
  description: "Gives you your/mentioned user's avatar",
  aliases: ["av"],
  usage: `rex avatar [member]`,
  timeout: 4000,
  botPermissions: ["ATTACH_FILES", "EMBED_LINKS"],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const member = message.mentions.members.first() || message.member;
    message.react("<:dot:860848255574736947>");
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Avatar for ${member.user.tag}`)
      .setDescription(
        `Link as\n[png](${member.user.displayAvatarURL({
          dynamic: true,
          format: "png",
          size: 1024,
        })}) | [jpg](${member.user.displayAvatarURL({
          dynamic: true,
          format: "jpg",
          size: 1024,
        })}) | [webp](${member.user.displayAvatarURL({
          dynamic: true,
          format: "webp",
          size: 1024,
        })})`
      )
      .setImage(
        member.user.displayAvatarURL({
          dynamic: true,
          size: 1024,
          format: "png",
        })
      );
    message.noMentionReply(embed);
  },
};
