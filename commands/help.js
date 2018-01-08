const Discord = require("discord.js");

exports.run = (client, msg, args) => {
	const embed = new Discord.RichEmbed()
	.setAuthor("BOT Allerion", client.user.avatarURL)
	.setThumbnail(client.user.avatarURL)
	.setDescription(`
		**__Available Commands__**
${prefix}help   
${prefix}ping      
${prefix}roll         
${prefix}avatar     
${prefix}random        
${prefix}trigger       
${prefix}profile       
${prefix}version       
${prefix}listemojis    
${prefix}greetings     
${prefix}randomsing    

**__Future Commands__**
${prefix}level         
${prefix}quoteoftheday 
	`)
	.setFooter("Allerion")
	.setTimestamp()
	.setColor("#000000")
	.addBlankField(true);
	msg.channel.send({embed});
}
