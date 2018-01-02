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
});

client.login(process.env.BOT_TOKEN);
