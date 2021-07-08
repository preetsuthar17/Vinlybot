const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "volume", // Optional
  category: "Music",
  description: "Set the volume of the bot in the vc",
  aliases: ["setvolume"], // Optional
  usage: "rex volume <volume>",
  run: async (client, message, args) => {
    const voice_channel = message.member.voice.channel;
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription(`You need to be in a vc to execute this command!`);
    if (!voice_channel) return message.noMentionReply(embed);
    let isDone = client.player.setVolume(message, parseInt(args[0]));
    const volume = new MessageEmbed()
      .setColor("#303136")
      .setDescription(`Volume set to ${args[0]}%!`);
    if (isDone) message.noMentionReply(volume);
  },
};
