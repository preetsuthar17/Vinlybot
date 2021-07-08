const { Client, Message, MessageEmbed } = require('discord.js');
const canvacord = require("canvacord");
const { MessageAttachment } = require("discord.js");

module.exports = {
    name: 'triggered',
    usage: 'rex triggered [member]',
    ownerOnly: false,
    cooldown: 3000,
    botPermission: ['VIEW_CHANNELS', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES'],
    authorPermission: [''],
    aliases: [''],
    description: 'Are you okay? Do not get triggered.',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    let triggered = await canvacord.Canvas.trigger(user.displayAvatarURL({ format: "png", dynamic: false }));
    let attachment = new MessageAttachment(triggered, "triggered.gif");
    return message.channel.send(attachment);
    },
};