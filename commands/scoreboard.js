const Discord = require("discord.js");
const moment = require('moment'); // The moment package module from npm
                    
exports.run = async (client, msg, args) => {
    const embed = new Discord.RichEmbed()
    .setAuthor("A Lazy Allerion Scoreboard")
    .setDescription(`Im too lazy to list it nicely so heres what you got`)
	.addField("**Users**",`${client.Alleriantium.map(g =>`\`${g.name}\` | :tickets: ${g.RaffleTickets}`).join("\n")}`,true)
	.addBlankField(true)
	.setFooter("Allerion Currency")
	.setTimestamp()
	.setColor("#ffffff");
	msg.channel.send({embed});	
};

exports.help = {
	name: "scoreboard",
	description: "Shows the scoreboard of the server.",
	usage: "`a!scoreboard`"
};
