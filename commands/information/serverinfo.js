const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: `serverinfo`,
  description: "informaiton about server!",
  aliases: ["si"],
  usage: `rex serverinfo`,
  timeout: 4000,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`:mailbox_with_mail:  Information about ${message.guild.name}`)
      .setThumbnail(`${message.guild.iconURL({ dynamic: true })}`)
      .setDescription(``)
      .setFooter(
        `ID: ${message.guild.id} | Created • ${message.guild.createdAt}`
      )
      .addFields(
        {
          name: `Owner`,
          value: `${message.guild.owner}`,
          inline: true,
        },
        {
          name: `Channels`,
          value: `${message.guild.channels.cache.size}`,
          inline: true,
        },
        {
          name: `Info`,
          value: `Verification Level: ${
            message.guild.verificationLevel
          }\nVoice region: ${
            message.guild.region
          }\n[Icon link](${message.guild.iconURL({ dynamic: true })})`,
          inline: true,
        },

        {
          name: `Members`,
          value: `${message.guild.memberCount}`,
          inline: true,
        },

        {
          name: `Roles`,
          value: `${message.guild.roles.cache.size} roles`,
          inline: true,
        }
      );

    message.noMentionReply(embed);
  },
};
