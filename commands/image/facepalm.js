const { Client, Message, MessageEmbed } = require('discord.js');
const canvacord = require("canvacord");
const { MessageAttachment } = require("discord.js");

module.exports = {
    name: 'facepalm',
    usage: 'rex facepalm [member]',
    ownerOnly: false,
    cooldown: 3000,
    botPermission: ['VIEW_CHANNELS', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES'],
    authorPermission: [''],
    aliases: [''],
    description: 'facepalm',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
    let image = await canvacord.Canvas.facepalm(user.displayAvatarURL({ format: "png", dynamic: false }));
    let attachment = new MessageAttachment(image, "facepalm.gif");
    return message.channel.send(attachment);
    },
};