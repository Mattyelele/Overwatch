const Discord = require('discord.js');
const client = new Discord.Client();


module.exports = {
    name: 'botinfo',
    description: 'This is the help commnd',
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        
        .setTitle('Overwatch')
        .setColor(0x00ffff)
        .setDescription(`Overwatch was created to help mange TylerMods Shelter \n Do !help to find out what else I can do :D `)
        
        
        message.channel.send(embed);
    }
}