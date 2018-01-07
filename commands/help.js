const Discord = require("discord.js");

exports.run = (client, msg, args) => {
	const embed = new Discord.RichEmbed()
	.setAuthor("BOT Allerion", client.user.avatarURL)
	.setThumbnail(client.user.avatarURL)
	.setDescription(`
		**__Available Commands__**
	help          \t- You just typed this
	ping          \t- Plays ping pong with you
	roll          \t- Rolls between variables you typed (space between variables)
	avatar        \t- Displays your own avatar (link included)
	random        \t- Type a number behind and randoms a number
	trigger       \t- Tag a person after the command to have fun
	profile       \t- Displays your profile (still improving)
	version       \t- Shows the current version of the BOT
	listemojis    \t- Show all the custom emojis available in current server
	greetings     \t- Need some love? type this
	randomsing    \t- Sing random lyrics for you
	\n**__Future Commands__**
	level         \t- Display levels for you
	quoteoftheday \t- Not sure why this is here
		`)
	.setFooter("Allerion")
	.setTimestamp()
	.setColor("#000000")
	.addBlankField(true)
	msg.channel.send({embed});
}
