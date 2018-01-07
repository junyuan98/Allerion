const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const prefix = "a!";

var ALLERIA = "331053004910362624";

client.on('ready', () => {
	console.log(`Logged in as ${client.user.username}!`);
	client.user.setPresence({ game: { name: 'Havana oh nana', type: 2 } });
});

client.on("guildMemberAdd", (member) => {
	console.log(`Our new member "${member.user.username}" has joined "${member.guild.name}"` );
	member.guild.channels.get("welcome").send(`"${member.user.username}" has joined this server`);
});

client.on('message', msg => {
	if (msg.author.bot) return;
	if (msg.channel.type === "dm") return; // Ignore DM channels.
	
	if (msg.content.startsWith(prefix)){
		const args = msg.content.slice(prefix.length).trim().split(/ +/g);
		const command = args.shift().toLowerCase();
	
		try {
			let commandFile = require(`./commands/${command}.js`);
			commandFile.run(client, msg, args);
		} catch (err) {
			console.error(err);
		}
		
		if ( command === "version"){ 
			msg.channel.sendMessage("Allerion version A.0.0.15.10 - Welcome to the server");
			msg.channel.sendMessage("`New command suggestions are welcomed`");
		}
		
		if ( command === "test"){ 
			msg.guild.emojis.map.forEach(){
				msg.channel.sendMessage(`${emoji}` + "\n");
			}
		}
		/*if (command === 'date') {
			let [age, sex, location] = args;
			msg.reply(`Hello ${msg.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
		}*/

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
	
	//Tags people if know id -> msg.channel.sendMessage("<@!" + msg.author.id +">");
});

client.login(process.env.BOT_TOKEN);
