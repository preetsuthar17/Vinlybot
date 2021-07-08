const db = require("quick.db");

module.exports = {
  name: "resetwarns",
  aliases: ["rwarns", "rsetwarns"],
  category: "moderation",
  usage: "rex rwarns <@user>",
  description: "Reset warnings of mentioned person",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.noMentionReply("You should have admin perms to use this command");
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.noMentionReply(
        "Please mention the person whose warning you want to reset"
      );
    }

    if (message.mentions.users.first().bot) {
      return message.noMentionReply("Bot are not allowed to have warnings");
    }

    if (message.author.id === user.id) {
      return message.noMentionReply("You are not allowed to reset your warnings");
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) {
      return message.noMentionReply(
        `${message.mentions.users.first().username} do not have any warnings`
      );
    }

    db.delete(`warnings_${message.guild.id}_${user.id}`);
    user.send(
      `Your all warnings are reseted by ${message.author.username} from ${message.guild.name}`
    );
    await message.noMentionReply(
      `Reseted all warnings of ${message.mentions.users.first().username}`
    );
  },
};
