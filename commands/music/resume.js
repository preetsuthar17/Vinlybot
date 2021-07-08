const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "resume", // Optional
  aliases: ["resume"], // Optional
  category: "Music",
  description: "Resume the song that was paused",
  usage: "rex resume",
  run: async (client, message, args) => {
    const voice_channel = message.member.voice.channel;
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription(`You need to be in a vc to execute this command!`);
    if (!voice_channel) return message.noMentionReply(embed);
    let song = client.player.resume(message);
    const resume = new MessageEmbed()
      .setColor("#303136")
      .setDescription(`**${song.name}** was resumed!`);
    if (song) message.noMentionReply(resume);
  },
};
