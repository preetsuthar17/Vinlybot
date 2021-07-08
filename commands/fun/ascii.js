const discord = require("discord.js");
const figlet = require("figlet"); // MAKE SURE TO INSTALL FIGLET PACKAGE OR CODE WONT WORK

module.exports = {
  name: "ascii",
  aliases: [],
  category: "fun",

  usage: "rex ascii <text>",
  description: "Returns provided text in ascii format.",
  run: async (client, message, args) => {
    let text = args.join(" ");
    if (!text) {
      return message.noMentionReply(`Please provide text for the ascii conversion!`);
    }
    let maxlen = 20;
    if (text.length > 20) {
      return message.noMentionReply(
        `Please put text that has 20 characters or less because the conversion won't be good!`
      );
    }
    // AGAIN, MAKE SURE TO INSTALL FIGLET PACKAGE!
    figlet(text, function (err, data) {
      message.noMentionReply(data, {
        code: "AsciiArt",
      });
    });
  },
};
