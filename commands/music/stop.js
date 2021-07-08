const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "stop", // Optional
  category: "Music",
  description: "Clears the queue and leave the vc",
  aliases: ["stop"], // Optional
  usage: "rex stop",
  run: async (client, message, args) => {
    const voice_channel = message.member.voice.channel;
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription(`You need to be in a vc to execute this command!`);
    if (!voice_channel) return message.noMentionReply(embed);
    let isDone = client.player.stop(message);
    const stop = new MessageEmbed()
      .setColor("#303136")
      .setDescription("Music stopped & the queue was cleared!");
    if (isDone) message.noMentionReply(stop);
  },
};
