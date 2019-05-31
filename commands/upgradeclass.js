const Discord = require("discord.js");
                    
exports.run = async (client, msg, args) => {
    const checkRank = client.Alleriantium.get(msg.author.id) || { lastDaily:'Not Collected', LifetimeAlleriantiums: 0, Alleriantium: 0, RaffleTickets: 0 , Rank: 'Beginner' };
    if (checkRank.Rank ==='Jobless'){
        msg.channel.send("Please enter the class you want to join : `undead`, `goblin` or `human`. Enter `cancel` to cancel.")
        .then(() => {
            msg.channel.awaitMessages(response => (response.content == 'cancel' ||response.content == 'undead' || response.content == 'goblin' || response.content == 'human'), {
                max: 1,
                time: 30000,
                errors: ['time'],
                })
            .then ((collected) => {
                //Undead
                if (collected.first().content === "undead") {
                    let embed = new Discord.RichEmbed()
                    .setAuthor("CLASS CHOSEN")
                    .setImage("https://vignette.wikia.nocookie.net/gameofthrones/images/e/e5/1508_promo_stills_12001692731.jpg")
                    .setDescription(`
                    ***Night King***: You may have fell, but you will rise again.........
                    `)
                    .setColor("#ff0000")
                    msg.channel.send(embed);
                    checkRank.Rank = 'Undead';
                    client.Alleriantium.set(msg.author.id, checkRank);
                }
                //Goblin
                if (collected.first().content === "goblin") {
                    let embed = new Discord.RichEmbed()
                    .setAuthor("YOU ARE NOW A GOBLIN!!!")
                    .setImage("http://media.moddb.com/images/articles/1/186/185935/auto/95xmt6B.jpg")
                    .setDescription(`
                    ***Great Goblin***: Well, well, well! Look who it is, another new goblin....
                    `)
                    .setColor("#ff0000")
                    msg.channel.send(embed);                    
                    checkRank.Rank = 'Goblin';
                    client.Alleriantium.set(msg.author.id, checkRank);
                }
                //Human
                if (collected.first().content === "human") {
                    let embed = new Discord.RichEmbed()
                    .setAuthor("YOU ARE NOW A HUMAN")
                    .setDescription(`
                    ***The Eye***: You have been chosen, fellow mortal...
                    `)
                    .setImage("https://i.pinimg.com/originals/50/58/a9/5058a9bc175c0b3eb67f9b7c9d562b8c.jpg")
                    .setColor("#ff0000")
                    msg.channel.send(embed);
                    checkRank.Rank = 'Human';
                    client.Alleriantium.set(msg.author.id, checkRank);

                }
                if (collected.first().content === "cancel") {
                    msg.channel.send('You have canceled the join class selection.');
                }
            })
            .catch(() => {
                msg.channel.send('There was no collected message that passed the filter within the time limit!');
            });
        });
    }
    else {
        msg.channel.send('You are not eligible for class upgrading (Need 500 LifetimeAlleriantiums and Jobless).')
    }
};

exports.help = {
	name: "upgradeclass",
	description: "Upgrade your current class. Currently available for Jobless rank only.",
	usage: "`a!upgradeclass`"
};

