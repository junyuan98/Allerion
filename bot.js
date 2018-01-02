const Discord = require("discord.js");
const client = new Discord.Client();
const p = "a!";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

function randomQuote() {
	return quotes[Math.floor(Math.random() * 10 + 1)];
};


client.on('message', msg => {
  if (msg.content.startsWith(p + "repeat ") ) {
        msg.channel.sendMessage("You just typed "+ msg.content.substr("repeat ".length + p.length) + "! ");
  }
    if (msg.content === (p + "checkavatar")){
    // Send the user's avatar URL
    msg.reply(msg.author.avatarURL);
    }
  
  if(msg.content === (p + "random")) {
    var x = randomQuote();
    msg.channel.sendMessage("You have randomed " + x);
  }
  
  if(msg.content === (p + "trigger ")) {
    let target = msg.mentions.users.first();
    msg.channel.sendMessage(msg.target + "your mama so fat, when bounty hunter cast track on her, the team gain global vision.");
  }
  
  if(msg.content === (p + "info")) {
       msg.channel.sendMessage("My prefix is a! and my commands are: hi, help, ping, checkavatar, repeat, trigger(beta)");  
  }
  
  if(msg.content === (p + "help")) {
       msg.channel.sendMessage("`help your ass man im a prematured bot, go to info for more info`");
  }
  
  if(msg.content === (p + "ping")) {
    msg.channel.sendMessage( msg.author + ", Pong! My ping is " + client.ping + "ms.");
  }
 
  if(msg.content === (p + "hi")) {
       msg.channel.sendMessage("hi bitch");
}
});

client.login(process.env.BOT_TOKEN);
