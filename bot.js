const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

const p = "a!";
client.on('message', msg => {
	if(msg.content === (p + "hi ")) {
		let target = msg.mentions.users.first();
       		msg.channel.sendMessage("Hi bitch.");
	}
});

client.login(process.env.BOT_TOKEN);
