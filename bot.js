// Load up the discord.js library
const Discord = require("discord.js");
//Client, basically the bot
const client = new Discord.Client();
//What we need for points database
//const sql = require("sqlite");
//sql.open("./score.sqlite");

//Set the preferences
const prefix = "a!";
var ALLERIA = "331053004910362624";

client.on('ready', () => {
	console.log(`Logged in as ${client.user.username}!`);
	client.user.setStatus('dnd');
	client.user.setPresence({ game: { name: 'on Heroku', type: 0 } });
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
	if (msg.channel.type !== "text") return; // Only Text channels.
	
	/*sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
		if (!row) {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		} else {
			let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
			if (curLevel > row.level) {
				row.level = curLevel;
				sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${msg.author.id}`);
				msg.reply(`You've leveled up to level **${curLevel}**!`);
			}
			sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${msg.author.id}`);
		}
	}).catch(() => {
		console.error;
		sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		});
	});*/
	
	if (msg.content.startsWith(prefix)){
		const args = msg.content.slice(prefix.length).trim().split(/ +/g);
		const command = args.shift().toLowerCase();
	
		try {
			let commandFile = require(`./commands/${command}.js`);
			commandFile.run(client, msg, args, sql);
		} catch (err) {
			console.error(err);
		}
		
		if ( command === "version"){ 
			msg.channel.sendMessage("Allerion version A.0.0.20.0 - Heroku mode");
			msg.channel.sendMessage("`Levels are ded on heroku`");
		}
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
