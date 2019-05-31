const Discord = require("discord.js");

exports.run = async (client, msg, args) => {

    const embed = new Discord.RichEmbed()
    .setAuthor("ALLERION EVENTS")
    .setDescription(`There are currently no events ongoing.`)
	.setFooter("EVENTS")
	.setTimestamp()
	.setColor("#ffffff");
    msg.channel.send({embed});
};

exports.help = {
	name: "event",
	description: "Event special command.",
	usage: "`a!event`"
};