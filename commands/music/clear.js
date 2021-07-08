const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "clear", // Optional
  aliases: ["clearqueue", "clear-queue"], // Optional
  category: "Music",
  description: "Clears the queue",
  usage: "rex clear",
  run: async (client, message, args) => {
    const voice_channel = message.member.voice.channel;
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription(`You need to be in a vc to execute this command!`);
    const embed1 = new MessageEmbed()
      .setColor("#303136")
      .setDescription("Queue was cleared!");
    if (!voice_channel) return message.noMentionReply(embed);
    let isDone = client.player.clearQueue(message);
    if (isDone) message.noMentionReply(embed1);
  },
};
