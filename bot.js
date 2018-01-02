const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.username}!`);
	client.user.setGame(`on beta testing`);
});

function randomQuote() {
	return [Math.floor(Math.random() * 10 + 1)];
};

const p = "a!";
client.on('message', msg => {
	
	// It's good practice to ignore other bots. This also makes your bot ignore itself
	// and not get into a spam loop (we call that "botception").
	if(msg.author.bot) return;
	
	
	if (msg.content.startsWith(p + "repeat ") ) {
		msg.channel.sendMessage("You just typed "+ msg.content.substr("repeat ".length + p.length) + "! ");
	}
	
	if (msg.content === (p + "checkavatar")){
		// Send the user's avatar URL
		msg.reply(msg.author.avatarURL);
	}
	
	if(msg.content === (p + "trigger ")) {
		let member = msg.mentions.members.first();
		if(!member) { msg.reply('Please tag a valid member.'); }
		else { msg.channel.sendMessage( " ${member.user.tag} , you are weak`"); }
	}
  
	if(msg.content === (p + "info")) {
		msg.channel.sendMessage("My prefix is a! and my commands are: hi, help, ping, checkavatar, repeat, random, trigger(beta)");  
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
