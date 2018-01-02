const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.username}!`);
	client.user.setGame(`on Alpha testing`);
});

const p = "a!";

client.on('message', msg => {
	
    if(msg.content === (p + "input")) {
       msg.channel.sendMessage("output");
    } 
	
	if (msg.content === ( p + "checkversion" )) {
		msg.channel.sendMessage("Allerion version 0.0.1 - Alpha-alpha phase");
	}

	if (msg.content === ( p + "help" )) {
		msg.channel.sendMessage("My prefix is a! and my available commands are:");
		msg.channel.sendMessage("checkversion, checkavatar, random, randomquote, repeat, ping.");
	}
	
	if (msg.content === (p + "checkavatar")) {
		msg.reply(msg.author.avatarURL);
	}
	
});

client.login(process.env.BOT_TOKEN);
