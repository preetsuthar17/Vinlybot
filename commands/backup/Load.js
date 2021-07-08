const backup = require("discord-backup");
module.exports = {
  name: "backup-load",
  aliases: ["bload"],
  category: "backup",

  usage: "rex backup-load",
  description: "load a server backup",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.noMentionReply(
        "<a:FHT_Cross:860848296154628096> You don't have enough permissions to use this command!."
      );
    }

    const backupID = args.join(" ");

    backup
      .fetch(backupID)
      .then(() => {
        message.noMentionReply(
          ":warning: All the server channels, roles, and settings will be cleared. Do you want to continue? Send `-confirm` or `cancel`!"
        );

        const collector = message.channel.createMessageCollector(
          (m) =>
            m.author.id === message.author.id &&
            ["-confirm", "cancel"].includes(m.content),
          {
            time: 60000,
            max: 1,
          }
        );
        collector.on("collect", (m) => {
          const confirm = m.content === "confirm";
          collector.stop();
          if (confirm) {
            backup
              .load(backupID, message.guild)
              .then(() => {
                return message.author.send(
                  " <a:FHT_Correct:860848302227718184> Backup loaded successfully!"
                );
              })
              .catch((err) => {
                if (err === "No backup found")
                  return message.noMentionReply(
                    "<a:FHT_Cross:860848296154628096> No backup found for ID " +
                      backupID +
                      "!"
                  );
                else
                  return message.author.send(
                    "<a:FHT_Cross:860848296154628096> An error occurred: " +
                      (typeof err === "string")
                      ? err
                      : JSON.stringify(err)
                  );
              });
          } else {
            return message.noMentionReply(":x: Cancelled.");
          }
        });

        collector.on("end", (collected, reason) => {
          if (reason === "time")
            return message.noMentionReply(
              "<a:FHT_Cross:860848296154628096> Command timed out! Please retry."
            );
        });
      })
      .catch(() => {
        return message.noMentionReply(
          "<a:FHT_Cross:860848296154628096> No backup found for ID " +
            backupID +
            "!"
        );
      });
  },
};
