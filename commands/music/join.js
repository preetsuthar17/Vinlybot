const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "join", // Optional
  aliases: [], // Optional
  category: "Music",
  description: "Join the voice channel!",
  usage: "rex join",
  run: async (client, message, args) => {
    const voiceChannel = message.member.voice.channel;
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription(`You need to be in a vc to execute this command!`);
    if (!voiceChannel) return message.noMentionReply(embed);
    voiceChannel.join();
    message.react("👌");
  },
};
