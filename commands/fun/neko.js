const { Random } = require("something-random-on-discord");

module.exports = {
  name: "neko",
  category: "fun",
  usage: "rex neko",


  description: "Get Fresh Neko Images :D",
  run: async (client, message, args) => {
    let data = await Random.getNeko();
    message.noMentionReply(data);
  },
};
