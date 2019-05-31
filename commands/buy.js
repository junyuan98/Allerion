const Discord = require("discord.js");

exports.run = async (client, msg, args) => {
    let option = args[0];
    if (!option) {return msg.channel.send('Please enter a valid option(1 to 3 only) for your purchase. etc \`a!buy 1\`');}
    const profilestats = client.Alleriantium.get(msg.author.id);
    if (option === "1") {
        if (profilestats.Alleriantium < 200) {
            msg.reply('You have insufficient funds.');
        }
        else {
            profilestats.Alleriantium -= 200;
            profilestats.RaffleTickets += 1;

            let embed = new Discord.RichEmbed()
            .setAuthor("SHOP", "https://wiki.plarium.com/images/d/df/Tavern.png")  
            .setThumbnail("http://i.imgur.com/TRXV8Lx.png")
            .setColor("#32CD32")
            .setDescription(`
            ${msg.author.username}, You have bought 1 :tickets: RaffleTicket for 250∀!!!
            `)  
            .addField("Alleriantiums Left", `${profilestats.Alleriantium}`, true)
            .addField("Raffle Tickets Now:", ":tickets:" + `${profilestats.RaffleTickets}`,true)
            .setFooter("Allerion Shopping")
            .setTimestamp();
            msg.channel.send({embed});
        }
    }
    else if (option === "2") {
        if (profilestats.Alleriantium < 800) {
            msg.reply('You have insufficient funds.');
        }
        else {
            profilestats.Alleriantium -= 800;
            profilestats.RaffleTickets += 5;

            let embed = new Discord.RichEmbed()
            .setAuthor("SHOP", "https://wiki.plarium.com/images/d/df/Tavern.png")   
            .setThumbnail("http://i.imgur.com/TRXV8Lx.png")
            .setColor("#32CD32")
            .setDescription(`
            ${msg.author.username}, You have bought 5 :tickets: RaffleTickets for 1000∀!!!
            `)  
            .addField("Alleriantiums Left", `${profilestats.Alleriantium}`,true)
            .addField("Raffle Tickets Now:", ":tickets:" + `${profilestats.RaffleTickets}`,true)
            .setFooter("Allerion Shopping")
            .setTimestamp();
            msg.channel.send({embed});
        }
    }
    else if (option === "3") {
        if (profilestats.Alleriantium < 1000) {
            msg.reply('You have insufficient funds.');
        }
        else {
            var number = [Math.floor(Math.random() * 11)];
            profilestats.Alleriantium -= 1000;
            const added = parseInt(number,10);
            profilestats.RaffleTickets += added;

            let embed = new Discord.RichEmbed()
            .setAuthor("SHOP", "https://wiki.plarium.com/images/d/df/Tavern.png")   
            .setThumbnail("http://i.imgur.com/TRXV8Lx.png")
            .setColor("#32CD32")
            .setDescription(`
            ${msg.author.username}, You are LUCKY!! You lucky-drawed ${number} :tickets: RaffleTickets! Congratz!!!!!
            `)  
            .addField("Alleriantiums Left", `${profilestats.Alleriantium}`,true)
            .addField("Raffle Tickets Now:", ":tickets:" + `${profilestats.RaffleTickets}`,true)
            .setFooter("Allerion Shopping")
            .setTimestamp();
            msg.channel.send({embed});
        }
    }
    else {
        msg.channel.send('Please enter a valid option(1 to 3 only) for your purchase. etc \`a!buy 1\`');
    }
};

exports.help = {
	name: "buy",
	description: "Buy some things from the shop by including the option number of the shop.",
	usage: "`a!buy [option]`"
};