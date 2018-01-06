var textArray = [
  'Fuck off',
  'Fuck you',
  'Shut up',
  'Diam 7 pls',
  'You are shit',
  'Your momma so fat, when Bounty Hunter cast Track on her, the team gained global vision',
  'Hi bitch'
];

exports.run = (client, msg, args, p) => {
	var Quote = Math.floor(Math.random() * textArray.length);
	msg.channel.sendMessage( msg.content.substr("trigger ".length + p.length) + ", " + `${textArray[Quote]}` ); 
}
