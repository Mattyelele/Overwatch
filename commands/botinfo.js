const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = {
    name: 'botinfo',
    description: 'This is the help commnd',
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        
        .setTitle('Overwatch')
        .setColor(65303)
        .setDescription(`Overwatch is a bot that helps manage servers and has lots of custom commands \n Do !help to find out what else I can do :D `)
        
        
        message.channel.send(embed);
    }
}