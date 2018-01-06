var textArray = [
  'Fuck off',
  'Fuck you',
  'Shut up',
  'Diam 7 pls',
  'You are shit',
  'Your momma so fat, when Bounty Hunter cast Track on her, the team gained global vision',
  'Hi bitch'
];

exports.run = (client, msg, args) => {
	var Quote = Math.floor(Math.random() * textArray.length);
	if (msg.content.substr("a!trigger ".length) === "331053004910362624")
		msg.channel.sendMessage("Dont trigger my creator pls (You can still manual type Alleria tho)");
	else
		msg.channel.sendMessage( msg.content.substr("a!trigger ".length) + ", " + `${textArray[Quote]}` ); 
}
