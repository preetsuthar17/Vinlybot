const backup = require("discord-backup");
module.exports = {
  name: "backup-create",
  aliases: [""],
  category: "backup",
  usage: "rex backup-create",
  description: "Make a backup for your server!",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.noMentionReply(
        "<a:FHT_Cross:860848296154628096> You don't have enough permissions to create a backup in this server."
      );
    }

    backup
      .create(message.guild)
      .then((backupData) => {
        return message.noMentionReply(
          "Backup created! Here is your ID: `" +
            backupData.id +
            "` Use `rex load-backup " +
            backupData.id +
            "` to load the backup on another server!"
        );
      })
      .catch(() => {
        return message.noMentionReply(
          "<a:FHT_Cross:860848296154628096> An error occurred\n**Tip:** Report error to support server https://discord.gg/DXyczwxQYf"
        );
      });
  },
};
