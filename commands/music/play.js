const { MessageEmbed } = require("discord.js");
const ytsr = require("ytsr");
module.exports = {
  name: "play",
  aliases: ["p"], // Optional
  category: "Music",
  description: "Play a song in the vc",
  usage: "rex play <music/link>",
  run: async (client, message, args) => {
    const voice_channel = message.member.voice.channel;
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription(`You need to be in a vc to execute this command!`);
    if (!voice_channel) return message.noMentionReply(embed);

    if (client.player.isPlaying(message)) {
      let song = await client.player.addToQueue(message, args.join(" "));

      const added = new MessageEmbed()
        .setColor("#303136")
        .setDescription(`Added **${song.name}** to the queue`);

      // If there were no errors the Player#songAdd event will fire and the song will not be null.
      if (song) message.noMentionReply(added);
      return;
    } else {
      let song = await client.player.play(message, args.join(" "));

      const started = new MessageEmbed()
        .setColor("#303136")
        .setDescription(`Started playing **${song.name}**`);

      // If there were no errors the Player#songAdd event will fire and the song will not be null.
      if (song) message.noMentionReply(started);
      return;
    }
  },
};
