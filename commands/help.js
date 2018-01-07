const Discord = require("discord.js");

exports.run = (client, msg, args) => {
	const embed = new Discord.RichEmbed()
	.setAuthor("BOT Allerion", client.user.avatarURL)
	.setThumbnail(client.user.avatarURL)
	..setDescription(`
		**__Available Commands__**
		${prefix}help 		- You just typed this
		${prefix}ping 		- Plays ping pong with you
		${prefix}roll 		- Rolls between variables you typed (space between variables)
		${prefix}avatar 	- Displays your own avatar (link included)
		${prefix}random 	- Type a number behind and randoms a number
		${prefix}trigger 	- Tag a person after the command to have fun
		${prefix}profile 	- Displays your profile (still improving)
		${prefix}listemojis 	- Show all the emojis available in current server
		${prefix}greetings 	- Need some love? type this
		${prefix}randomsing 	- Sing random lyrics for you
		**__Future Commands__**
		${prefix}level
		`)
	.setFooter("Allerion")
	.setTimestamp()
	.setColor("#000000")
	.addBlankField(true)
	msg.channel.send({embed});
}
