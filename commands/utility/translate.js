const { Client, Message, MessageEmbed } = require("discord.js");
const translate = require("@iamtraction/google-translate");
module.exports = {
  name: "translate",
  aliases: [""],
  description: "Translate given text!",
  usage: `rex translate <text>`,
  timeout: 4000,
  userPermissions: [""],
  botPermissions: [""],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const query = args.join(" ");
    if (!query) return message.noMentionReply("Please enter text to translate!");

    const translated = await translate(query, { to: "en" });
    message.noMentionReply(
      new MessageEmbed()
        .setFooter(`${message.author.tag}`)
        .addField("Text To Translate", `\`\`\`${args.join(" ")}\`\`\``)
        .addField("Translateted Text", `\`\`\`${translated.text}\`\`\``)
        .setColor("#303136")
    );
  },
};
