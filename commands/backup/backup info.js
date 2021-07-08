const Discord = require("discord.js");
const backup = require("discord-backup");

module.exports = {
  name: "backupinfo",
  aliases: ["backup-info"],
  category: "backup",
  description: "Information about backup",
  usage: "rex backupinfo <backup_id>",

  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.noMentionReply(
        "<a:FHT_Cross:860848296154628096>  You need to have the administrator permissions to create a backup in this server."
      );
    }

    const backupID = args.join(" ");

    if (!backupID)
      return message.noMentionReply(
        "<a:FHT_Cross:860848296154628096> Please specify a valid backup ID!"
      );

    backup
      .fetch(backupID)
      .then((backup) => {
        const date = new Date(backup.data.createdTimestamp);
        const yyyy = date.getFullYear().toString(),
          mm = (date.getMonth() + 1).toString(),
          dd = date.getDate().toString();
        const formattedDate = `${yyyy}/${mm[1] ? mm : "0" + mm[0]}/${
          dd[1] ? dd : "0" + dd[0]
        }`;

        const embed = new Discord.MessageEmbed()
          .setAuthor(":information_source: Backup", backup.data.iconURL)
          .addField("Server name", backup.data.name)
          .addField("Size", backup.size + " kb")
          .addField("Created at", formattedDate)
          .setFooter("Backup ID: " + backup.id);

        return message.noMentionReply(embed);
      })
      .catch((err) => {
        if (err === "No backup found")
          return message.noMentionReply(
            "<a:FHT_Cross:860848296154628096> No backup found for ID " +
              backupID +
              "!"
          );
        else
          return message.noMentionReply(
            "<a:FHT_Cross:860848296154628096> An error occurred: " +
              (typeof err === "string")
              ? err
              : JSON.stringify(err)
          );
      });
  },
};
