const Discord = require("discord.js");

exports.run = async (client, msg, args, sql) => {
	let [name] = args;
	if ( name === undefined) { 
		const profilestats = client.Alleriantium.get(msg.author.id);
			let embed = new Discord.RichEmbed()
			.setAuthor(msg.author.username , msg.author.avatarURL)  
            .addField("Current Rank", `${profilestats.Rank}`)		
            .addField("Raffle Tickets", ":tickets: " + `${profilestats.RaffleTickets}`,true)
			.addField("Alleriantiums (∀)", `${profilestats.Alleriantium}`,true)
			.addField("Lifetime ∀ Earned", `${profilestats.LifetimeAlleriantiums}`, true )
			.setFooter("Allerion Currency")
			.setTimestamp()
			.setColor("#DAA520");
			msg.channel.send({embed});
	}
	else {
		let member = msg.mentions.members.first();
		if (!member){
			msg.channel.send("Please tag a vaild member");
		}
		else {
			const profilestats = client.Alleriantium.get(member.user.id);	
			let embed = new Discord.RichEmbed()
				.setAuthor(member.user.username, member.user.avatarURL)      
				.addField("Current Rank", `${profilestats.Rank}`)		
				.addField("Raffle Tickets", ":tickets: " + `${profilestats.RaffleTickets}`,true)
				.addField("Alleriantiums (∀)", `${profilestats.Alleriantium}`,true)
				.addField("Lifetime ∀ Earned", `${profilestats.LifetimeAlleriantiums}`, true )
				.setFooter("Allerion Currency")
				.setTimestamp()		
				.setColor("#DAA520");
				msg.channel.send({embed});
		}
	}
};

exports.help = {
	name: "stats",
	description: "Shows the stats of the user or the tagged user.",
	usage: "`a!stats` or `a!stats [tag user]`"
};


