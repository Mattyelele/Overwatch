const Discord = require('discord.js');

module.exports = {
    name: 'socials',
    description: `This displays Tyler's social media in an embedded message`,
    execute(message, args){
        const embed = new Discord.MessageEmbed()

        .setTitle(`Social Media`)
        .setColor(0xfffff)
        .setDescription('')

        message.channel.send(embed);
    }
}