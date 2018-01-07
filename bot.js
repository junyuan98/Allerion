const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const prefix = "a!";

var ALLERIA = "331053004910362624";

client.on('ready', () => {
	console.log(`Logged in as ${client.user.username}!`);
	client.user.setPresence({ game: { name: 'Havana oh nana', type: 2 } });
});

client.on('message', msg => {
	if (msg.author.bot) return;
	if (msg.channel.type === "dm") return; // Ignore DM channels.
	
	const LOLs = ["LUL", "HAHA"];
	if( LOLs.some(word => msg.content.includes(word)) ) {
		const LUL = client.emojis.find("name", "LUL");
		msg.react(LUL.id);
		msg.channel.sendMessage(`${LUL}`);

	}
	
	if (msg.content.startsWith(prefix)){
		const args = msg.content.slice(prefix.length).trim().split(/ +/g);
		const command = args.shift().toLowerCase();
	
		if ( command === "version"){ 
			msg.channel.sendMessage("Allerion version A.0.0.13.0 - Low Profile");
			msg.channel.sendMessage("New command suggestions are welcomed");
		}

		try {
			let commandFile = require(`./commands/${command}.js`);
			commandFile.run(client, msg, args);
		} catch (err) {
			console.error(err);
		}
	
		if (command === 'help') {
			let newembed = new Discord.RichEmbed()
			.setAuthor("BOT Allerion" , client.user.avatarURL)
			.setThumbnail(client.user.avatarURL)
			.addField("**Commands**", "**ping**\n**avatar**\n**random**\n**version**\n**profile**\n**trigger**\n**greetings**\n**listemojis**\n**randomsing**")
			.addField("**Character**","**level**")
			.setFooter("Allerion")
			.setTimestamp()
			.setColor("#000000")
			.addBlankField(true);
			msg.channel.send({newembed});
		}
	
		if (command === 'kick') {
			if (msg.author.id === ALLERIA) {
				let member = msg.mentions.members.first();
				member.kick();
				msg.channel.sendMessage(`${member.user.username} was succesfully kicked. Hooray! (or nay)`);
			}
		}
	
		if (command === 'tag') {
			let member = msg.mentions.members.first();
			msg.channel.sendMessage(`${member.id}`);
			msg.channel.sendMessage("<@!" + `${member.id}` +"> , Life is nice");
		}

		if (command === 'date') {
			let [age, sex, location] = args;
			msg.reply(`Hello ${msg.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
		}
		
		/*if (command === 'profile') {
			let member = msg.mentions.members.first();
			if (!member){
				msg.channel.sendMessage("Please tag a vaild member");
			}
			else {
				msg.channel.sendMessage("<@!" + `${member.id}` +"> , Life is nice");
				msg.channel.sendMessage(`${member.user.username}`);
				let embed = new Discord.RichEmbed()
				.setAuthor(member.username , member.user.avatarURL)
				.setThumbnail(member.user.avatarURL)
				.addField("Username", `${member.user.tag}`)
				.addField("UserID", `${member.user.id}`)
				.addField("Join server date", "Long long ago(_i guess_)")
				.setTimestamp()
				.setColor("#b200ff");
				msg.channel.send({embed});
		}*/
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
