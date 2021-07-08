const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "shuffle", // Optional
  aliases: ["sh"], // Optional
  category: "Music",
  description: "Shuffle the queue",
  usage: "rex shuffle",
  run: async (client, message, args) => {
    const voice_channel = message.member.voice.channel;
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription(`You need to be in a vc to execute this command!`);
    if (!voice_channel) return message.noMentionReply(embed);
    let songs = client.player.shuffle(message);
    const shuffle = new MessageEmbed()
      .setColor("#303136")
      .setDescription("Server Queue was shuffled.");
    if (songs) message.noMentionReply(shuffle);
  },
};
