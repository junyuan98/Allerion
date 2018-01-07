const Discord = require("discord.js");

exports.run = (client, msg, args) => {
	let [name] = args;
	if ( name === undefined) { 
		let embed = new Discord.RichEmbed()
		.setAuthor(msg.author.username , msg.author.avatarURL)
		.setThumbnail(msg.author.avatarURL)	           
		.addField("Username", `${msg.author.tag}`)		
		.addField("UserID", `${msg.author.id}`)	
		.addField("Join server date", "Long long ago(_i guess_)")		
		.setTimestamp()		
		.setColor("#b200ff");
		msg.channel.send({embed})
	}
	else {
		let member = msg.mentions.members.first();
		if (!member){
			msg.channel.sendMessage("Please tag a vaild member");
		}
		else {
			let embed = new Discord.RichEmbed()
			.setAuthor(member.user.username , member.user.avatarURL)
			.setThumbnail(member.user.avatarURL)	           
			.addField("Username", `${member.user.tag}`)		
			.addField("UserID", `${member.user.id}`)
			.addField("Join server date", "Long long ago(_i guess_)")		
			.setTimestamp()		
			.setColor("#b200ff");
			msg.channel.send({embed})
		}
	}
}
