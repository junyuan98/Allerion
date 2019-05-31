const Discord = require("discord.js");
const moment = require('moment'); // The moment package module from npm

exports.run = async (client, msg, args) => {
    const checkDaily = client.Alleriantium.get(msg.author.id);
    if (checkDaily.lastDaily != moment().format('L')){
        checkDaily.lastDaily = moment().format('L');
        if (checkDaily.Rank === 'Undead'){
            var DailyAmount = 240;
        } else { var DailyAmount = 200;} 
        checkDaily.Alleriantium += DailyAmount;
        client.Alleriantium.set(msg.author.id, checkDaily);
        let embed = new Discord.RichEmbed()
        .setAuthor("DAILY REWARD", client.user.avatarURL)   
        .setColor("#ff69b4")
        .setDescription(`
        ${msg.author.username}, You claimed ${DailyAmount} Alleriantiums!
Note: Daily rewards are not counted in Lifetime Alleriantiums.
        `)  
        .setFooter("Allerion Economy")
        .setTimestamp()
        msg.channel.send({embed});

    }
    else {
        let embed = new Discord.RichEmbed()
        .setAuthor("DAILY REWARD", client.user.avatarURL)   
        .setColor("#ff69b4")
        .setDescription(`${msg.author.username}, You have already claimed your daily reward!`)
        .setFooter("Allerion Economy")
        .setTimestamp()
        msg.channel.send({embed});
    }
};

exports.help = {
	name: "daily",
	description: "Who dont loves freebies? Daily rewards are nice.",
	usage: "`a!daily`"
};