const Discord = require('discord.js');
const client = new Discord.client();

client.on('message', message => {
    if (message.content === '!questions') {
        const embed = new Discord.MessageEmbed()

        .setTitle('questions')
        .setColor(0xff0000)
        .setDescription('what does tyler mod? \n ')

        message.channel.send(embed);
    }
});

client.on('message', message => {
    if (message.content === 'what does tyler mod?') {
        const embed = new Discord.MessageEmbed()

        .setTitle('Tyler currently doesnt make any mods but he does manage the PS4Trainer')
        .setColor(0xfffff)
        .setDescription('Website: http://ps4trainer.com/ \n do !questions if you have any other questions')

        message.channel.send(embed);
    }
});