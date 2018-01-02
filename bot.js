const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
	
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started`); 
  client.user.setGame(`on Alpha-testing`);
});

function randomnumber(){
	return [Math.floor(Math.random() * 10 + 1)];
};

const p = "a!";

client.on('message', msg => {
	
	if (msg.author.bot) return;
	// Here we separate our "command" name, and our "arguments" for the command. 
	// e.g. if we have the message "+say Is this the real life?" , we'll get the following:
	// command = say
	// args = ["Is", "this", "the", "real", "life?"]
	const args = msg.content.slice("a!".length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
	if (command === "checkversion") {
		msg.channel.sendMessage("Allerion version 0.0.1 - Alpha-alpha phase");
	}
	
	if (command === "help") {
		msg.channel.sendMessage("My prefix is a! and my available commands are:");
		msg.channel.sendMessage("checkversion, checkavatar, random, randomquote, repeat, ping.");
	}
	
	if (command === "random") {
		var x = randomnumber();
		msg.channel.sendMessage("You have randomed " x );
	}
	
	if (command === "checkavatar") {
		msg.reply(msg.author.avatarURL);
	}
	
	if (command === "ping") {
		msg.channel.sendMessage( msg.author + ", Pong! My ping is " client.ping + "ms." );
	}
});

client.login(process.env.BOT_TOKEN);
