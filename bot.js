const Discord = require("discord.js"); // Load up the discord.js library
const client = new Discord.Client(); //Client, basically the bot
const fs = require("fs");

const sql = require("sqlite"); //SQL database.
sql.open("./score.sqlite");

const Enmap = require("enmap"); //Enmap database
const EnmapLevel = require("enmap-level");

var schedule = require('node-schedule'); //Schdule package module from npm
const moment = require('moment'); // The moment package module from npm

require("./modules/functions.js")(client); //Get useful functions from modules.

const prefix = "a!"; //Set the preferences
var msgSent = 0;
var ALLERIA = "331053004910362624";

const currencyProvider = new EnmapLevel({name: "Alleriantium"}); //Main Currency System using Enmaps.
client.Alleriantium = new Enmap({provider: currencyProvider});
client.commands = new Discord.Collection();

fs.readdir("./commands/",(err,files) => {
	if(err) console.error(err);
	
	let jsfiles = files.filter(f => f.split(".").pop() === "js");
	if (jsfiles.length <= 0){
		console.log("No commands to load.");
		return;
	}

	console.log(`Loading ${jsfiles.length} commands!`);

	jsfiles.forEach((f,i) => {
		let props = require(`./commands/${f}`);
		console.log(`${i+1}: ${f} loaded!`);
		client.commands.set(props.help.name,props);
	});
})

/*client.on('messageReactionAdd', (reaction, user) => {
	console.log(reaction);
    if(reaction.emoji.name === "🇪") {
		//console.log(reaction);	
		console.log(reaction);
		let channel = reaction.message.channel;
		channel.send(reaction.message.content);
	}
});*/

client.on('ready', () => { 
	console.log(`Logged in as ${client.user.username}!`); 	//Do these after the client is ready.
	client.user.setStatus('Online');
	client.user.setPresence({ game: { name:"Super Mario Odyssey", type: 3 } });
});


client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find('name', 'general-lobby'); 	// Send the message to a designated channel on a server:
	if (!channel) return; 	// Do nothing if the channel wasn't found on this server
	channel.send(`Welcome to the server, ${member}`); 	// Send the message, mentioning the member
});

//Tags people if know id -> msg.channel.sendMessage("<@!" + msg.author.id +">");
client.on('message', msg => {
	if (msg.author.bot) return;	//Ignore all bot messages.
	client.currencyMonitor(client, msg); 
	if (msg.channel.type !== "text") return; // Only Text channels.

	/*msgSent ++; //To do the below things only once
	if (msgSent === 1){
		var j = schedule.scheduleJob('00 * * * *', function(){
			const quotechannel = msg.guild.channels.find("name","general-lobby");
			quotechannel.sendMessage("Question of the day: Is Dota 2 now a dead game?");
		})
	} else {}*/

	sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
		if (!row) {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		} else {
			let expcap = row.level * 10;
			row.points++;
			if (row.points >= expcap) {
				row.points = 0;
				row.level++;
				sql.run(`UPDATE scores SET points = ${row.points}, level = ${row.level} WHERE userId = ${msg.author.id}`);
				msg.reply(`You've leveled up to level **${row.level}**!`);
			}
			sql.run(`UPDATE scores SET points = ${row.points} WHERE userId = ${msg.author.id}`);
		}
	}).catch(() => {
		console.error;
		sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		});
	});

	if (msg.content.startsWith(prefix)){
		const args = msg.content.slice(prefix.length).trim().split(/ +/g);
		const command = args.shift().toLowerCase();
	
		let cmd = client.commands.get(command);
		if (cmd) cmd.run(client, msg, args, sql);
		/*try {
			let commandFile = require(`./commands/${command}.js`);
			commandFile.run(client, msg, args, sql);
		} catch (err) {
			console.error(err);
		}*/
	}

	const LOLs = ["LUL", "HAHA"];
	if( LOLs.some(word => msg.content.includes(word)) ) {
		const LUL = client.emojis.find("name", "LUL");
		msg.react(LUL.id);
	}

	const waows = ["waow"];
	if( waows.some(word => msg.content.toLowerCase().includes(word) ) ) {
		const WAOW = client.emojis.find("name", "PogChamp");
		msg.react(WAOW.id);
	}
	
	/*const terms = ["ExtremeDie", "ED"];
	if( terms.some(word => msg.content.includes(word)) ) {
		msg.react("🇪")
		.then(() => {
			msg.react("🇩");
		})
	}*/
});

client.login(process.env.BOT_TOKEN);
