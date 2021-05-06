const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json')
const fs = require('fs');
const { exception } = require('console');
client.commands = new Discord.Collection();

client.on('guildMemberAdd', member => {

  const channel = member.guild.channels.cache.find(ch => ch.name === 'logs');

  if (!channel) return;

  channel.send(`Welcome to the server, ${member}`);

/* Command Handler */
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  console.log(`${file} has loaded!`)
  client.commands.set(command.name, command);
}

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;


  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  switch(command) {
    case 'help':
    case 'botinfo':
    case 'socials':
    case 'reactionroles':
      client.commands.get(command).execute(message, args);
      break;
    default:
      break;
  }
});

client.on('ready', () => {
  console.log(`${client.user.username} is now online!`);
  client.user.setActivity(`Matty break me`, {type: "WATCHING"});
});


/* Token is stored in config.js*/
client.login(token)
