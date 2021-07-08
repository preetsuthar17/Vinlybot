const client = require("discord.js");

module.exports.run = (client) => {
  console.log(`✅ Logged on as ${client.user.username}`);
  client.user.setActivity("rex help");
};
