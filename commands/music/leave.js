const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "leave", // Optional
  aliases: [], // Optional
  category: "Music",
  description: "Leaves the voice channel!",
  usage: "rex leave",

  run: async (client, message, args) => {
    const voiceChannel = message.member.voice.channel;
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription(`You need to be in a vc to execute this command!`);
    if (!voiceChannel) return message.noMentionReply(embed);
    voiceChannel.leave();
  },
};
