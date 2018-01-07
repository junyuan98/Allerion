const Discord = require("discord.js");

exports.run = (client, msg, args) => {
	const embed = new Discord.RichEmbed()
	.setAuthor("BOT Allerion", client.user.avatarURL)
	.setThumbnail(client.user.avatarURL)
	.setDescription(`
		**__Available Commands__**
	help          - You just typed this
	ping          - Plays ping pong with you
	roll          - Rolls between variables you typed (space between variables)
	avatar        - Displays your own avatar (link included)
	random        - Type a number behind and randoms a number
	trigger       - Tag a person after the command to have fun
	profile       - Displays your profile (still improving)
	version       - Shows the current version of the BOT
	listemojis    - Show all the custom emojis available in current server
	greetings     - Need some love? type this
	randomsing    - Sing random lyrics for you
	\n**__Future Commands__**
	level         - Display levels for you
	quoteoftheday - Not sure why this is here
		`)
	.setFooter("Allerion")
	.setTimestamp()
	.setColor("#000000")
	.addBlankField(true)
	msg.channel.send({embed});
}
