const { token, mongo } = require("./config.json");
const discord = require("discord.js");
require('discord-inline-replys');

const client = new discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

const config = require("./config.json");
const mongoose = require('mongoose')
module.exports = client;
// const Discord = require('discord.js');
const fetch = require("node-fetch");

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command", "events"].forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});

const { Player } = require("discord-music-player");
const player = new Player(client, {
  leaveOnEmpty: false,
});


client.player = player;

new Player(client, {
  leaveOnEnd: true,
  leaveOnStop: true,
  leaveOnEmpty: true,
  timeout: 10,
  volume: 200,
  quality: "high",
});
const fs = require("fs");
const { Console } = require("console");

client.on("guildCreate", (guild) => {
  const channelId = config.botlogch;
  const channel = client.channels.cache.get(channelId);
  if (!channel) return;
  const embed = new discord.MessageEmbed()
    .setTitle("Someone invited me!")
    .setDescription(
      `**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}`
    )
    .setTimestamp()
    .setColor("#303136")
    .setFooter(`I'm in ${client.guilds.cache.size} Guilds Now!`);
  channel.send(embed);
});

client.on("guildDelete", (guild) => {
  const channelId = "841994754399928341";
  const channel = client.channels.cache.get(channelId);
  if (!channel) return;
  const embed = new discord.MessageEmbed()
    .setTitle("I got kicked!")
    .setDescription(
      `**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}`
    )
    .setTimestamp()
    .setColor("#303136")
    .setFooter(`I'm in ${client.guilds.cache.size} Guilds Now!`);
  channel.send(embed);
});

//chatbot/////////


client.on("message", async message => {
  if (message.channel.name == "chatbot") {
  if (message.author.bot) return;
    message.channel.startTyping();
  if (!message.content) return message.channel.send("Please say something.");
  fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(message.content)}&botname=${client.user.username}&ownername=DEVELOPER_NAME`)
      .then(res => res.json())
      .then(data => {
          message.noMentionReply(`${data.message}`);
      });
        message.channel.stopTyping();
  }
  });

mongoose.connect(config.mongo, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(console.log('✅ Connected to mongoDB'))
client.login(token);
