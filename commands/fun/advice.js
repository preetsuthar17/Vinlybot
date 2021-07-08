/**
 * Required package
 */
const { Random } = require("something-random-on-discord");

module.exports = {
  name: "advice",
  category: "fun",

  description: "Get Fresh Advice :D",
  usage: "rex advice",

  run: async (client, message, args) => {
    let data = await Random.getAdvice();
    message.noMentionReply(data);
  },
};
