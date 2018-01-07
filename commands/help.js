const Discord = require("discord.js");

exports.run = (client, msg, args) => {
	const embed = new Discord.RichEmbed()
	.setAuthor("text", "https://bestsecuritysearch.com/wp-content/uploads/2016/10/discord-logo-bss.png")
	.setThumbnail("https://image.ibb.co/dkT4yR/XD.png")
	.addField("field", "text below field", true)
	.addField("field2", "text below field2", true)
	.setImage("https://image.ibb.co/dkT4yR/XD.png")
	.setFooter("text")
	.setTimestamp()
	.setColor("#b200ff")
	.addBlankField(true)
	msg.channel.send(embed);
	/*.setAuthor("BOT Allerion" , client.user.avatarURL)
	.setThumbnail(client.user.avatarURL)
	.addField("**Commands**", "**ping**\n**roll**\n**avatar**\n**random**\n**version**\n**profile**\n**trigger**\n**greetings**\n**listemojis**\n**randomsing**")
	.addField("**Character**","**level**")
	.setFooter("Allerion")
	.setTimestamp()
	.setColor("#000000")
	.addBlankField(true);*/
	
	msg.channel.send({embed});
}
