const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "playlist",
  aliases: ["plist"], // Optional
  category: "Music",
  description: "Play a playlist in the vc",
  usage: "rex playlist",
  run: async (client, message, args) => {
    const voice_channel = message.member.voice.channel;
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setDescription(`You need to be in a vc to execute this command!`);
    if (!voice_channel) return message.noMentionReply(embed);
    // If maxSongs is -1, will be infinite.
    await client.player.playlist(message, {
      search: args.join(" "),
      maxSongs: -1,
    });
  },
};
