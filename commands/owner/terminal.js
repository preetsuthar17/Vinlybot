const { Client, Message, MessageEmbed } = require("discord.js");
const child = require("child_process");

module.exports = {
  name: "terminal",
  aliases: ["term"],
  description: "Only for owners to run terminal in discord!",
  usage: `rex terminal <input>`,
  hidden: true,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if (message.author.id !== "741549223127941170")
      return message.noMentionReply(
        new MessageEmbed()
          .setDescription("You don't have permission to run this comman!")
          .setColor("#303136")
      );
    const command = args.join(" ");
    if (!command)
      return message.noMentionReply(
        new MessageEmbed()
          .setDescription("please give a command to run in terminal!")
          .setColor("#303136")
      );

    child.exec(command, (err, res) => {
      if (err) return console.log(err);
      message.noMentionReply(res.slice(0, 2000), { code: "js" });
    });
  },
};
