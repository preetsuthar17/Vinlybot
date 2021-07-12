// const client = require("discord.js");
const client = require('../index') 
const statuses = [
 "Rex help",
 "Rex invite",
 "How my owner coded me. Hmmmmmm",
 "Powerful Moderation"
]

module.exports.run = (client) => {
  console.log(`✅ Logged on as ${client.user.username}`);
  setInterval(() => {
    const index = Math.floor(Math.random() * (statuses.length - 1) + 1);
    const mainActivity = statuses[index]
    client.user.setActivity(mainActivity, { type: "WATCHING"})
  }, 10000);
};
