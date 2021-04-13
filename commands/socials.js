const Discord = require('discord.js');

module.exports = {
    name: 'socials',
    description: `This displays Tyler's social media in an embedded message`,
    execute(message, args){
        const embed = new Discord.MessageEmbed()

        .setTitle(`Tyler's social media`)
        .setColor(0xfffff)
        .setDescription('Website: https://www.tylermods.com/ \n Twitch: https://www.twitch.tv/tylermods_rl \n Merch: https://merch.streamelements.com/tylermods_rl \n Twitter: https://twitter.com/TylerMods \n YouTube: https://www.youtube.com/channel/UCEU-Wr20fPPnrEuoYH-U_Mg')

        message.channel.send(embed);
    }
}