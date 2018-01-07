const Discord = require("discord.js");

exports.run = (client, msg, args) => {
	const embed = new Discord.RichEmbed()
	.setAuthor("BOT Allerion", client.user.avatarURL)
	.setThumbnail(client.user.avatarURL)
	.setDescription(`
		**__Available Commands__**
help   
ping      
roll         
avatar     
random        
trigger       
profile       
version       
listemojis    
greetings     
randomsing    

**__Future Commands__**
level         
quoteoftheday 
	`)
	.setFooter("Allerion")
	.setTimestamp()
	.setColor("#000000")
	.addBlankField(true)
	msg.channel.send({embed});
}
