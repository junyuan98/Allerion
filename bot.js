const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.username}!`);
	client.user.setGame(`on Alpha testing`);
});

function randomnumber(){
	return [Math.floor(Math.random() * 10 + 1)];
};

const p = "a!";

client.on('message', msg => {
	if (msg.author.bot) return;
	
	if (msg.content === ( p + "checkversion" )) {
		msg.channel.sendMessage("Allerion version 0.0.3.3 - Recovery from dead");
		msg.channel.sendMessage("sing changed to randomsing, trigger in beta");
	}

	if (msg.content === ( p + "help" )) {
		msg.channel.sendMessage("My prefix is a! and my available commands are:");
		msg.channel.sendMessage("checkversion, checkavatar, random, selftrigger, trigger, randomsing, ping.");
	}
	
	if (msg.content === (p + "checkavatar")) {
		msg.reply(msg.author.avatarURL);
	}
	
	if (msg.content === ( p + "ping" )) {
		msg.channel.sendMessage( msg.author + ", Pong! My ping is " + client.ping + "ms." );
	}
	
	if (msg.content === (p + "random")) {
		var x = randomnumber();
		msg.channel.sendMessage("You have randomed " + x );
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
	
	if (msg.content === ( p + "trigger " )) {
		let member = msg.mentions.members.first();
		if(!member)
			return msg.reply("Please mention a valid member of this server");
		var textArray = [
			'Fuck off',
			'Fuck you',
			'Shut up',
			'Diam 7 pls',
			'You are shit'
		];
		var Quote = Math.floor(Math.random() * textArray.length);
		msg.channel.sendMessage(`${member.user.tag}`);
		msg.channel.sendMessage(`${msg.author.tag}`);
		msg.channel.sendMessage(msg.member);
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
		];
		var number = Math.floor(Math.random() * songLyrics.length);
		msg.channel.sendMessage(`${songLyrics[number]}`);
	}
	
});

client.login(process.env.BOT_TOKEN);
