const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "skip", // Optional
  aliases: ["skip"], // Optional
  category: "Music",
  description: "Skip the song that its playing.",
  usage: "rex skip",
  run: async (client, message, args) => {
    const voice_channel = message.member.voice.channel;
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription(`You need to be in a vc to execute this command!`);
    if (!client.player.isPlaying(message)) {
      message.noMentionReply("Unknow Radio must be playing in order to skip the track");

      return;
    }

    await client.player.skip(message);

    message.noMentionReply("Skipped");
  },
};
