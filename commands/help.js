const Discord = require("discord.js");

exports.run = (client, msg, args) => {
	const helplist = new Discord.RichEmbed()
	.setAuthor("BOT Allerion" , client.user.avatarURL)
	.setThumbnail(client.user.avatarURL)
	.addField("**Commands**", "**ping**\n**roll**\n**avatar**\n**random**\n**version**\n**profile**\n**trigger**\n**greetings**\n**listemojis**\n**randomsing**")
	.addField("**Character**","**level**")
	.setFooter("Allerion")
	.setTimestamp()
	.setColor("#000000")
	.addBlankField(true);
	msg.channel.send({helplist});
}
