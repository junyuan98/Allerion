const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "a!";
var ALLERIA = "331053004910362624";

/*const Enmap = require("enmap");
const EnmapLevel = require("enmap-level");

require("./modules/functions.js")(client);

const pointProvider = new EnmapLevel({name: "points"});
this.points = new Enmap({provider: pointProvider});*/

client.on('ready', () => {
	console.log(`Logged in as ${client.user.username}!`);
	client.user.setStatus('dnd');
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
	//client.pointsMonitor(client, msg);
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
			msg.channel.sendMessage("Allerion version A.0.0.16A.17 - LEVEL UP!");
			msg.channel.sendMessage("`Levels are ded`");
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
