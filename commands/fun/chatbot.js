const { Client, Message, MessageEmbed } = require('discord.js');
module.exports = {
    name: 'chatbot',
    description: 'Setup chat bot!',
    aliases: 'chatbot-setup',
    authorPermission: ["MANAGE_GUILD"],

    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const chatch = message.guild.channels.cache.find((channel) => channel.name === "chatbot")  
        if(!chatch) await message.guild.channels.create('chatbot').then(message.channel.send('Successfully setup chatbot in this server!')) 
        else message.channel.send('Chatbot is already setup!')
    }
}