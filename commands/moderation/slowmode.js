module.exports = {
  name: "slowmode",
  category: "moderation",
  description: "Lets you set slowmode on the channel.",
  args: true,
  usage: "rex slowode <time>",
  run: (client, message, args) => {
    const amount = parseInt(args[0]);
    if (message.member.hasPermission("MANAGE_CHANNEL"))
      if (isNaN(amount))
        return message.noMentionReply(
          "<a:crossWrong:It doesn't seem to be valid number"
        );
    if (args[0] === amount + "s") {
      message.channel.setRateLimitPerUser(amount);
      if (amount > 1) {
        message.noMentionReply("slowmode is now " + amount + " seconds");
        return;
      } else {
        message.noMentionReply("slowmode is now " + amount + " second");
        return;
      }
    }
    if (args[0] === amount + "min") {
      message.channel.setRateLimitPerUser(amount * 60);
      if (amount > 1) {
        message.noMentionReply("slowmode is now " + amount + " minutes");
        return;
      } else {
        message.noMentionReply("slowmode is now " + amount + " minute");

        return;
      }
    }
    if (args[0] === amount + "h") {
      message.channel.setRateLimitPerUser(amount * 60 * 60);
      if (amount > 1) {
        message.noMentionReply("slowmode is now " + amount + " hours");
        return;
      } else {
        message.noMentionReply("slowmode is now " + amount + " hour");
        return;
      }
    } else {
      message.noMentionReply("You can only set seconds(s), minutes(min) and hours(h)");
    }
  },
};
