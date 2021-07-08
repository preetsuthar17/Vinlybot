const { Random } = require("something-random-on-discord");

module.exports = {
  name: "meme",
  category: "fun",
  usage: "rex meme",


  description: "Get Fresh meme :D",
  run: async (client, message, args) => {
    let data = await Random.getMeme();
    message.noMentionReply(data);
  },
};
