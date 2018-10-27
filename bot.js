const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '&'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` By Sweet Home`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


const randomPuppy = require('random-puppy');
client.on('message', msg => { 
     
        if (msg.content.startsWith(prefix + `meme`)) {
           let args = msg.content.split(" ").slice(1);
randomPuppy('memes')
    .then(url => {
        const embed = new Discord.RichEmbed()
            .setTimestamp()
            .setImage(url)
            .setColor('RANDOM')
        msg.channel.send(embed);
    });
}
});







client.login(process.env.BOT_TOKEN); 
