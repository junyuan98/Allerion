const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.username}!`);
	client.user.setPresence({ game: { name: 'Alpha 0.0.3.5', type: 0 } });
});

function randomnumber(){
	return [Math.floor(Math.random() * 10 + 1)];
};

const p = "a!";

client.on('message', msg => {
	if (msg.author.bot) return;
	
	if (msg.content === ( p + "checkversion" )) {
		msg.channel.sendMessage("Allerion version A.0.0.3.5 - Its getting better");
		msg.channel.sendMessage("random and tag in beta,trigger removed");
	}

	if (msg.content === ( p + "help" )) {
		msg.channel.sendMessage("My prefix is a! and my available commands are:");
		msg.channel.sendMessage("checkversion, checkavatar, selftrigger, tag, randomsing, ping.");
	}
	
	if (msg.content === (p + "checkavatar")) {
		msg.reply(msg.author.avatarURL);
	}
	
	if (msg.content === ( p + "ping" )) {
		msg.channel.sendMessage( msg.author + ", Pong! My ping is " + client.ping + "ms." );
	}
	
	if (msg.content === (p + "tag")) {
		let member = msg.mentions.members.first();
		msg.channel.sendMessage(`${member.user.tag}`);
	}
	
	
	if (msg.content.startsWith(p + "random ")) {
		var x = randomnumber();
		msg.channel.sendMessage("The suffix is " + msg.content.substr("random ".length + p.length) + "! ");
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
