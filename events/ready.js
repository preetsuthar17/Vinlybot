// const client = require("discord.js");
const client = require('../index') 
const statuses = [
  "rex help",
  "rex invite to invite me",
  "Rule breakers",
  "How pritu coded me. Hmmmmmmmmmm",
  "Powerful moderation",
  `Over ${client.guilds.cache.size} Servers!`,
  `Over ${client.users.cache.size} Servers!`
]

module.exports.run = (client) => {
  console.log(`✅ Logged on as ${client.user.username}`);
  setInterval(() => {
    const index = Math.floor(Math.random() * (statuses.length - 1) + 1);
    const mainActivity = statuses[index]
    client.user.setActivity(mainActivity, { type: "WATCHING"})
  }, 10000);
};
