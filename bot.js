const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.username}!`);
	client.user.setPresence({ game: { name: 'Alpha Testing', type: 0 } });
});

function randomnumber(y){
	return [Math.floor(Math.random() * y + 1)];
};

const p = "a!";

client.on('message', msg => {
	if (msg.author.bot) return;
	
	if (msg.content === ( p + "checkversion" )) {
		msg.channel.sendMessage("Allerion version A.0.0.5.9 - Im _still_ getting better");
		msg.channel.sendMessage("Checkprofile is added, trigger is _still_ in process");
	}

	if (msg.content === ( p + "help" )) {
		msg.channel.sendMessage("My prefix is a! and my available commands are:");
		msg.channel.sendMessage("checkversion, checkprofile, checkavatar, random, selftrigger, randomsing, ping.");
	}
	
	if (msg.content === (p + "checkavatar")) {
		msg.reply(msg.author.avatarURL);
	}
	
	if (msg.content === ( p + "ping" )) {
		msg.channel.sendMessage( msg.author + ", Pong! My ping is " + client.ping + "ms." );
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
	
	if (msg.content === ( p + "selftrigger" )) {
		var textArray = [
			'Fuck off',
			'Fuck you',
			'Shut up',
			'Diam 7 pls',
			'You are shit'
		];
		var Quote = Math.floor(Math.random() * textArray.length);
		msg.reply(`${textArray[Quote]}`);
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
		];
		var number = Math.floor(Math.random() * songLyrics.length);
		msg.channel.sendMessage(`${songLyrics[number]}`);
	}
	
	//Beta commands
	if (msg.content === (p + "test")) {
		msg.channel.sendMessage(msg.author.username);
	}
	if (msg.content === (p + "tag")) {
		let member = msg.mentions.members.first();
		msg.channel.sendMessage(member.user.tag);
	}
	
	if (msg.content.startsWith(p + "trigger ")) {
		let member = msg.mentions.members.first();
		var textArray = [
			'Fuck off',
			'Fuck you',
			'Shut up',
			'Diam 7 pls',
			'You are shit'
		];
		var Quote = Math.floor(Math.random() * textArray.length);
		msg.channel.sendMessage(member);
	}
	
	if (msg.content === (p + "checkprofile")) {
		let embed = new Discord.RichEmbed()
		.setAuthor(msg.author.username , msg.author.avatarURL)
		.setThumbnail(msg.author.avatarURL)
		.addField("User", "text below field")
		.addField("UserID", msg.author.userid)
		.setTimestamp()
		.setColor("#b200ff")
		.addBlankField(true);
		msg.channel.send({embed});
	}
});

client.login(process.env.BOT_TOKEN);
