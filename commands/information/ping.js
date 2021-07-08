module.exports = {
  name: "ping",
  category: "info",
  description: "Get bot ping :/",
  usage: "rex ping",
  run: (client, message) => {
    message.noMentionReply(`🏓 Ping Pong **${client.ws.ping}ms**`);
  },
};
