const Discord = require("discord.js");

exports.run = async (client, msg, args) => {
	if (!args[0]){
		const embed = new Discord.RichEmbed()
		.setAuthor("BOT Allerion")
		.setDescription(`
**Allerion version A.1.0.0.0 - RESURRECTED**
BIGJACKPOT MODE AND RAFFLE(FOR GIVEAWAYS) WILL BE RELEASED SOON!! STAY TUNED!!
NEW HELP FUNCTION, Type a!help [command] to get specific details of the command.
JACKPOT MODE RELEASED!!! 1 RAFFLETICKET TO PARTICIPATE AND WIN THE PRIZEPOT!!!
	`)
		.setThumbnail(client.user.avatarURL)
		.addField("**__General Commands__**",`  
ping      
roll         
avatar     
random        
trigger	
randomsing `,true)
		.addField("**__Profile Commands__**",`
**NEW** : buy
shop
ranks
daily
level
stats
profile 
**NEW** : scoreboard
upgradeclass
		`,true)
		.addField("**__The Casino__**",`
***IN BETA***: dicegame
***NEW***: jackpot
***SOON***: raffle
***SOON***: bigjackpot
		`,true)
		.addField("**Special Commands**",`
		event
				`,true)
		.setFooter("Allerion")
		.setTimestamp()
		.setColor("#ffffff");
		msg.channel.send({embed});
	}
	else {
		let command = args[0];
		if (client.commands.has(command)){
			command = client.commands.get(command);
			const embed = new Discord.RichEmbed()
			.setAuthor(`a!${command.help.name}`)
			.setDescription(`
Description: ${command.help.description}
Usage: ${command.help.usage}
			`)
			.setFooter("Allerion")			
			.setTimestamp()
			.setColor("#ffffff");
			msg.channel.send({embed});
		}
		else {
			msg.channel.send('There is no such command');
		}
	}
};

exports.help = {
	name: "help",
	description: "Help you list all the commands of course.",
	usage: "`a!help` or `a!help [commands]`"
};
