const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const p = "a!";
var ALLERIA = "331053004910362624";

client.on('ready', () => {
	console.log(`Logged in as ${client.user.username}!`);
	client.user.setPresence({ game: { name: 'Alpha Testing', type: 0 } });
});

function randomnumber(y){
	return [Math.floor(Math.random() * y + 1)];
};

client.on('message', msg => {
	if (msg.author.bot) return;
	if (msg.channel.type === "dm") return; // Ignore DM channels.
	
	const args = msg.content.slice(p.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
	if (command === 'version'){ 
		msg.channel.sendMessage("Allerion version A.0.0.11.5 - LUL,a wild emoji appears");
		msg.channel.sendMessage("```listemojis command is now available, profile malfunctioning```");
	}

	
	try {
		let commandFile = require(`./commands/${command}.js`);
		commandFile.run(client, msg, args);
	} catch (err) {
		console.error(err);
	}
	
	const LOLs = ["LUL", "HAHA"];
	if( LOLs.some(word => msg.content.includes(word)) ) {
		const LUL = client.emojis.find("name", "LUL");
		msg.react(LUL.id);
		msg.channel.sendMessage(`${LUL}`);

	}
	
	const swearWords = ["fuck", "cb", "sohai", "noob"];
	if( swearWords.some(word => msg.content.toLowerCase().includes(word)) ) {
		msg.channel.sendMessage("Dont rude la cb");
	}
	
	const terms = ["ExtremeDie", "ED"];
	if( terms.some(word => msg.content.includes(word)) ) {
		msg.channel.sendMessage("ED is GOD, ED is LIFE");
	}
	
	const extreme = ["extreme"];
	if( extreme.some(word => msg.content.toLowerCase().includes(word)) ) {
		msg.channel.sendMessage("GIFF EXTREME OR RIOT");
	}
	
	if (command === 'help') {
		let embed = new Discord.RichEmbed()
		.setAuthor("BOT Allerion" , client.user.avatarURL)
		.setThumbnail(client.user.avatarURL)
		.addField("**Commands**", "**ping**\n**avatar**\n**random**\n**version**\n**profile**\n**trigger**\n**greetings**\n**listemojis**\n**randomsing**")
		.addField("**Character**","**level**")
		.setFooter("Allerion")
		.setTimestamp()
		.setColor("#000000")
		.addBlankField(true);
		msg.channel.send({embed});
	}
	
	if (command === 'kick') {
		if (msg.mentions.members.size === 0)
			return msg.reply("Please mention a user to kick");
		if (msg.author.id === ALLERIA) {
			let member = message.mentions.members.first();
			member.kick();
		}
		else return;
	}
	
	/*
	if (command === 'random') {
		var y = parseInt(msg.content.substr("random ".length + p.length), 10);
		if ( isNaN(y) === true )
			msg.channel.sendMessage("Please enter a valid number");
		else {
			var x = randomnumber(y);
			msg.channel.sendMessage("You have randomed " + x );
		}
	}
	
	if (command === 'profile') {
		let embed = new Discord.RichEmbed()
		.setAuthor(msg.author.username , msg.author.avatarURL)
		.setThumbnail(msg.author.avatarURL)
		.addField("Username", `${msg.author.tag}`)
		.addField("UserID", `${msg.author.id}`)
		.addField("Join server date", "Long long ago(_i guess_)")
		.setTimestamp()
		.setColor("#b200ff")
		.addBlankField(true);
		msg.channel.send({embed});
	}*/
	//Beta commands
	
	if (command === 'test') {
		let [age, sex, location] = args;
		msg.reply(`Hello ${msg.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
	}

	//Tags people if know id -> msg.channel.sendMessage("<@" + msg.author.id +">");
});

client.login(process.env.BOT_TOKEN);
