const { MessageEmbed, Message, Client } = require("discord.js");
const { readdirSync } = require("fs");
const config = require('../../config.json')
const prefix = config.prefix
const pritu = require("pritulx");
const ReactionPages = pritu.ReactionPages;
let color = "#303136";

module.exports = {
  name: "help",

  aliases: ["h"],
  description: "Shows all available bot commands.",
  usage: "rex help [command]",
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String} args 
   * @returns 

   */
  run: async (client, message, args) => {
    if (!args[0]) {
      let categories = [];

      //categories to ignore
      let ignored = ["owner"];

      const emo = {
        fun: "🎆",
        image: "🖼️",
        information: "❓",
        moderation: "⚒️",
        utility: "⚙️",
        music: "🎶",
        suggestions: "👍",
        backup: "🎒",
      };

      readdirSync("./commands/").forEach((dir) => {
        if (ignored.includes(dir.toLowerCase())) return;
        const name = `${emo[dir.toLowerCase()]} ${dir.toUpperCase()}`;
        let cats = new Object();

        cats = {
          name: name,
          value: `\`${prefix}help ${dir.toLowerCase()}\``,
          inline: true,
        };

        categories.push(cats);
        //cots.push(dir.toLowerCase());
      });

      const embed1 = new MessageEmbed()
        .setTitle("Help Menu:")
        .setDescription(
          `\`\`\`js\nPrefix: ${prefix}\nParameters: <> = required, [] = optional\`\`\`\n[Invite me](https://discord.com/oauth2/authorize?client_id=856131755898437632&permissions=8&scope=bot%20applications.commands)\n\nTo check out a category, use command \`${prefix}help [category]\` For more information go to the next page by reacting!\n\n__**Categories**__`
        )
        .addFields(categories)
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({
            dynamic: true,
          })
        )
        .setTimestamp()
        .setThumbnail(
          client.user.displayAvatarURL({
            dynamic: true,
          })
        )
        .setColor("#303136");
      const embed2 = new MessageEmbed()
        .setColor("#303136")
        .setImage(
          "https://i.imgur.com/4kvXQiI.png"
        )
        // .setDescription(
        //   "Here is quick example to use sub commands just like,\nyou can use `rex help ban`."
        // );

      const pages = [embed1, embed2];
      const textPageChange = true;
      const emojis = ["⏪", "⏩"];
      const time = 30000;
      ReactionPages(message, pages, textPageChange, emojis, time);

      // return message.noMentionReply(embed);
    } else {
      let cots = [];
      let catts = [];

      readdirSync("./commands/").forEach((dir) => {
        if (dir.toLowerCase() !== args[0].toLowerCase()) return;
        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
          file.endsWith(".js")
        );

        const cmds = commands.map((command) => {
          let file = require(`../../commands/${dir}/${command}`);

          if (!file.name) return "No command name.";

          let name = file.name.replace(".js", "");

          let des = `❯ ${client.commands.get(name).description}`;
          let emo = `${client.commands.get(name).emoji}`;

          let obj = {
            cname: `${emo} \`${name}\``,
            des,
          };

          return obj;
        });

        let dota = new Object();

        cmds.map((co) => {
          dota = {
            name: `${cmds.length === 0 ? "In progress." : co.cname}`,
            value: co.des ? co.des : "No Description",
            inline: true,
          };
          catts.push(dota);
        });

        cots.push(dir.toLowerCase());
      });

      console.log(cots);

      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (cots.includes(args[0].toLowerCase())) {
        const combed = new MessageEmbed()
          .setTitle(
            `__${
              args[0].charAt(0).toUpperCase() + args[0].slice(1)
            } Commands!__`
          )
          .setDescription(
            `Use \`${prefix}help\` followed by a command name to get more information on a command.\nFor example: \`${prefix}help ping\`.\n\n`
          )
          .addFields(catts)
          .setColor("#303136");

        return message.noMentionReply(combed);
      }

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(
            `Invalid command! Use \`${prefix}help\` for all of my commands!`
          )
          .setColor("#303136");
        return message.noMentionReply(embed);
      }

      const embed = new MessageEmbed()
        .setTitle("Command Details:")
        .addField(
          "Command:",
          command.name ? `\`${command.name}\`` : "No name for this command."
        )
        .addField(
          "Aliases:",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "No aliases for this command."
        )
        .addField(
          "Usage:",
          command.usage
            ? `\`${prefix}${command.name} ${command.usage}\``
            : `\`${prefix}${command.name}\``
        )
        .addField(
          "Command Description:",
          command.description
            ? command.description
            : "No description for this command."
        )
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({
            dynamic: true,
          })
        )
        .setTimestamp()
        .setColor("#303136");
      return message.noMentionReply(embed);
    }
  },
};
