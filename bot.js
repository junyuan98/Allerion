const Discord = require("discord.js");
const client = new Discord.Client();
const sql = require("sqlite");
sql.open("./score.sqlite");
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
	
	if (msg.content === ( p + "version" )) { 
		msg.channel.sendMessage("Allerion version A.0.1.0.0 - The Greatness of Levels");
		msg.channel.sendMessage("```LEVELS ARE IN PROGRESS AND ARE HIGHLY UNSTABLE```");
		msg.channel.sendMessage("```TYPE MORE TO LEVEL UP (**NOT SPAM**)```");
	}
	
	if (msg.content === (p + "help")) {
		let embed = new Discord.RichEmbed()
		.setAuthor("BOT Allerion" , client.user.avatarURL)
		.setThumbnail(client.user.avatarURL)
		.addField("**Commands**", "**ping**\n**avatar**\n**random**\n**version**\n**profile**\n**trigger**\n**greetings**\n**randomsing**")
		.addField("**Character**","**level**\n**points**")
		.setFooter("Allerion")
		.setTimestamp()
		.setColor("#000000")
		.addBlankField(true);
		msg.channel.send({embed});
	}
	
	if (msg.content === ( p + "ping" )) {
		msg.channel.sendMessage( msg.author + ", Pong! My ping is " + client.ping + "ms." );
	}
	if (msg.content === (p + "avatar")) {
		msg.reply(msg.author.avatarURL);
	}
	
	if (msg.content.startsWith(p + "random ")) {
		var y = parseInt(msg.content.substr("random ".length + p.length), 10);
		if ( isNaN(y) === true )
			msg.channel.sendMessage("Please enter a valid number");
		else {
			var x = randomnumber(y);
			msg.channel.sendMessage("You have randomed " + x );
		}
	}
	
	if (msg.content === (p + "profile")) {
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
	}
	
	if (msg.content.startsWith(p + "trigger ")) {
		var textArray = [
			'Fuck off',
			'Fuck you',
			'Shut up',
			'Diam 7 pls',
			'You are shit',
			'Your momma so fat, when Bounty Hunter cast Track on her, the team gained global vision',
			'Hi bitch'
		];
		var Quote = Math.floor(Math.random() * textArray.length);
		msg.channel.sendMessage( msg.content.substr("trigger ".length + p.length) + ", " + `${textArray[Quote]}` ); 
	}
	
	if (msg.content === (p + "greetings")) {
		if (msg.author.id === ALLERIA)
			msg.channel.sendMessage("Greetings owner <3 Have a nice day~");
		else
			msg.channel.sendMessage("Greetings Discordling " + msg.author.id + ", have a nice day");
	}
	
	if (msg.content === ( p + "randomsing" )) {
		var songLyrics = [
			'Havana oh nana, half of my heart is in havana na na na',
			'Is it too late now to say sorry',
			'2+2 IS 4, MINUS 1 THATS 3 QUICK MATHS',
			'BOOM BOOM POW GONNA GET GET',
			'Despacito, nlskdnflkjkljfklsrfkljdlk burito',
			'You just want attention, you dont want my heart',
			'We were just kids when we fell , in, love',
			'People fall in love in mysterious ways, maybe just the touch of a hand',
			'你好吗,我会中文 Ching Chong',
			'AND IIIIIIIIIII***IIII***IIII WILL ALWAYSSSSS LOVEEE YOUUUUU_UUU_**UUU**_UUU_UUU',
			'When I see your face, theres not a thing that I would change, cause youre amazing, just the way you are',
			'Gave you all I had and you tossed it in the trash, you tossed it in the trash, you did',
			'I hear Jerusalem bells a-ringing, Roman Cavalry choirs are singing',
			'Duuuuuuuuuuuuuuuuuuuuuuun, Dun dun dun dun dun dun dun dun dun dun dun dundun dun dundundun dun dun dun dun dun dun dundun dundun, BOOM'
		];
		var number = Math.floor(Math.random() * songLyrics.length);
		msg.channel.sendMessage(`${songLyrics[number]}`);
	}

	//Beta commands
	if (msg.content === ( p + "test" )) {
		var x = client.users.id;
		msg.channel.sendMessage( x );
	}
	
	if (msg.content === ( p + "testing" )) {
		let target = msg.mentions.users.first();
		msg.channel.sendMessage(target);
		target;
	}

	//Tags people if know id -> msg.channel.sendMessage("<@" + msg.author.id +">");
	
	
	
	sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
		if (!row) {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		} 
		else {
			let curLevel = Math.floor(Math.sqrt(row.points + 1));
			if (curLevel > row.level) {
				row.level = curLevel;
				sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${msg.author.id}`);
				msg.reply(`You've leveled up to level **${curLevel}**! Road to god is real?`);
			}
			sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${msg.author.id}`);
		}
	}).catch(() => {
		console.error;
		sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
			sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [msg.author.id, 1, 0]);
		});
	});

	if (!msg.content.startsWith(p)) return;

	if (msg.content.startsWith(p + "level")) {
		sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
			if (!row) return msg.reply("Your current level is 0");
			msg.reply(`Your current level is ${row.level}`);
		});
	} else if (msg.content.startsWith(p + "points")) {
		sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
			if (!row) return msg.reply("sadly you do not have any points yet!");
			msg.reply(`you currently have ${row.points} points, good going!`);
		});
	}
});

client.login(process.env.BOT_TOKEN);
