const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const { prefix, token } = require('./config.json')
const fs = require('fs');
client.commands = new Discord.Collection();

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

  if (command === 'help'){
    client.commands.get('help').execute(message, args);
  } else if (command == 'botinfo'){
    client.commands.get('botinfo').execute(message, args);
  } else if (command == 'trainer'){
    client.commands.get('trainer').execute(message, args);
  } else if (command == 'socials'){
    client.commands.get('socials').execute(message, args);
  } else if (command == 'reactionroles'){
    client.commands.get('reactionroles').execute(message, args);
  }
});


client.on('ready', () => {
  console.log(`${client.user.username} is now online!`);
  client.user.setActivity(`Matty break me`, {type: "WATCHING"});
});


/* Token is store in config.js*/
client.login(token);