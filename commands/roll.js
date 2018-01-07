const Discord = require("discord.js");

exports.run = (client, msg, args) => {
        if (args === undefined) {
                 msg.channel.sendMessage("Please state your term that you want to roll, etc. a!roll A B C");
        }
        else {
                var number = Math.floor(Math.random() * args.length);
        
                const embed = new Discord.RichEmbed()
                .setAuthor("ALLERION ROLLS", client.user.avatarURL)   
                .setColor(0x00AE86)
                .setDescription("You have rolled " + `${args[number]}` + "!")
                .setFooter("Gambling is bad")
                .setTimestamp()
                msg.channel.send({embed});
        }
}
        
