const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'This is the help commnd',
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        
        .setTitle('Help')
        .setColor(0xff0000)
        .addFields(
            { name: '!questions', value: 'This command gives you a list of any questions you may have we have the anwser to!'},
            { name: '!socials', value: 'This command lists all my social media!'},
        )
        
        .setFooter()
        
        message.channel.send(embed);
    }
}