const Discord = require('discord.js')

module.exports = {
    name: 'reactionroles',
    description: 'Reaction role setup',
    async execute(message, args, Discord, client){
        const channel = '830104329318563912'
        const RL = message.guild.roles.cache.find(role => role.name === 'RL');
        const CW = message.guild.roles.cache.find(role => role.name === 'Cold War');

        const RLEmoji = ':red_circle:';
        const CWEmoji = ':blue_circle:';


        let embed = new Discord.RichEmbed()
            .setColor('#FF0000')
            .setTitle('title')
            .setDescription('React to this to get roles \n \n' + `${RLEmoji} For The Rocket League role \n` + `${CWEmoji} For The Cold War role`)

            let messageEmbed = await message.channel.send(embed)
            Discord.MessageEmbed.react(RLEmoji);
            Discord.MessageEmbed.react(CWEmoji);
    }
}