const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "pause", // Optional
  aliases: ["pause"], // Optional
  category: "Music",
  description: "Pause the queue",
  usage: "rex pause",
  run: async (client, message, args) => {
    const voice_channel = message.member.voice.channel;
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription(`You need to be in a vc to execute this command!`);
    if (!voice_channel) return message.noMentionReply(embed);
    let song = client.player.pause(message);
    const pause = new MessageEmbed()
      .setColor("#303136")
      .setDescription(`**${song.name}** was paused!`);
    if (song) message.noMentionReply(pause);
  },
};
