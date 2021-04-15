const Discord = require('discord.js');

module.exports = {
    name: 'what does tyler mod?',
    description: 'reply to what does tyler mod queston',
    execute(message, args){
        const embed = new Discord.MessageEmbed()

        .setTitle('Tyler currently doesnt make any mods but he does manage the PS4Trainer')
        .setColor(0xfffff)
        .setDescription('Website: http://ps4trainer.com/ \n do !trainer to find out more about the trainer \n do !questions if you have any other questions')

        message.channel.send(embed);
    }
}