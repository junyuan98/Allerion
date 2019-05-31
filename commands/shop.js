const Discord = require("discord.js");

exports.run = async (client, msg, args) => {
		const AlleriantiumNumber = client.Alleriantium.get(msg.author.id).Alleriantium;
        const totalRaffles = client.Alleriantium.get(msg.author.id).RaffleTickets;
		const CashRank = client.Alleriantium.get(msg.author.id).Rank;
        const embed = new Discord.RichEmbed()
        .setAuthor("THE TAVERN","https://wiki.plarium.com/images/d/df/Tavern.png")
        //.setThumbnail("https://wiki.plarium.com/images/d/df/Tavern.png")
        .setImage("http://i.imgur.com/TRXV8Lx.png")    
		.setDescription(`
        TYPE \`a!buy\` + optionnumber to buy! etc. \`a!buy 3\` to luckydraw!!
        `)
        .addField("Your Rank", `${CashRank}`, true )		
        .addField("Raffle Tickets", ":tickets: " + `${totalRaffles}`,true)
        .addField("Your Alleriantiums (∀)", `${AlleriantiumNumber}`)
        .addField(`SHOP`,`
**1**. Buy a raffleTicket :tickets: for 200∀ each (a!buy 1)
**2**. Buy 5 raffleTickets :tickets: for 800∀ (a!buy 2)
**3**. The LuckyDraw : 1000∀ for a random amount between 0 - 10 :tickets: RaffleTickets (a!buy 3) 
        `)
        .setTimestamp()		
        .setColor("#32CD32");
        msg.channel.send({embed});
};

exports.help = {
	name: "shop",
	description: "Displays the shop menu.",
	usage: "`a!shop`"
};

