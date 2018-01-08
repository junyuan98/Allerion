const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const prefix = "a!";
var userData = JSON.parse(fs.readFileSync("./points.json", "utf8"));
var ALLERIA = "331053004910362624";

client.on('ready', () => {
	console.log(`Logged in as ${client.user.username}!`);
	client.user.setPresence({ game: { name: 'Havana oh nana', type: 2 } });
});

client.on('guildMemberAdd', member => {
	// Send the message to a designated channel on a server:
	const channel = member.guild.channels.find('name', 'member-log');
	// Do nothing if the channel wasn't found on this server
	if (!channel) return;
	// Send the message, mentioning the member
	channel.send(`Welcome to the server, ${member}`);
});

client.on('message', msg => {
	if (msg.author.bot) return;
	if (msg.channel.type === "dm") return; // Ignore DM channels.
	
	if (msg.content.startsWith(prefix)){
		const args = msg.content.slice(prefix.length).trim().split(/ +/g);
		const command = args.shift().toLowerCase();
	
		try {
			let commandFile = require(`./commands/${command}.js`);
			commandFile.run(client, msg, args, userData);
		} catch (err) {
			console.error(err);
		}
		
		if ( command === "version"){ 
			msg.channel.sendMessage("Allerion version A.0.0.16.25 - LEVEL UP!");
			msg.channel.sendMessage("`Levels are enabled (?)`");
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

	if (!userData[msg.author.id]) userData[msg.author.id] = {
		points: 0,
		level: 0
	};
	
	userData[msg.author.id].points++;
	let curLevel = Math.floor(0.5 * Math.sqrt(userData[msg.author.id].points));
	if (curLevel > userData[msg.author.id].level) {
		// Level up!
		userData[msg.author.id].level = curLevel;
		msg.reply(`You"ve leveled up to level **${curLevel}**! Road to God Tier is real?`);
	}
	
	fs.writeFile("./points.json", JSON.stringify(userData), (err) => {
		if (err) console.error(err)
	});
	
	//Tags people if know id -> msg.channel.sendMessage("<@!" + msg.author.id +">");
});

client.login(process.env.BOT_TOKEN);
