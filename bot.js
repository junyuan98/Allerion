const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.username}!`);
	client.user.setGame(`on Alpha testing`);
});

function randomnumber(){
	return [Math.floor(Math.random() * 10 + 1)];
};

const p = "a!";

client.on('message', msg => {
	if (msg.author.bot) return;
	
	if (msg.content === ( p + "checkversion" )) {
		msg.channel.sendMessage("Allerion version 0.0.2.3 - Revived from dead");
		msg.channel.sendMessage("`Randomquote function is in progress(but not tested)`");
	}

	if (msg.content === ( p + "help" )) {
		msg.channel.sendMessage("My prefix is a! and my available commands are:");
		msg.channel.sendMessage("checkversion, checkavatar, random, randomquote, ping.");
	}
	
	if (msg.content === (p + "checkavatar")) {
		msg.reply(msg.author.avatarURL);
	}
	
	if (msg.content === ( p + "ping" )) {
		msg.channel.sendMessage( msg.author + ", Pong! My ping is " + client.ping + "ms." );
	}
	
	if (msg.content === (p + "random")) {
		var x = randomnumber();
		msg.channel.sendMessage("You have randomed " + x );
	}
	
	if (msg.content === ( p + "randomquote" )) {
		var textArray = ['Fuck off','Fuck you','Shut up','Diam 7 pls','You are shit'];
		var Quote = Math.floor(Math.random() * textArray.length);
		msg.channel.sendMessage("Quote number = " + Quote);
	}
	
});

client.login(process.env.BOT_TOKEN);
