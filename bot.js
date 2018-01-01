const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

const p = "a!";
client.on('message', msg => {
	if(command === p + "alive") {
message.channel.send("im alive");
}
	if(command === p + "hi") {
message.channel.send("Hi bitch.");
}
	
	if(msg.content === (p + "msg ")) {
       		let target = msg.mentions.users.first();
       		msg.target.sendMessage(msg.content.substr(p.length + "msg ".length) + msg.author.nickname);
	}
});

client.login(process.env.BOT_TOKEN);
