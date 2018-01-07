exports.run = (client, msg, args) => {
	
	let member = msg.mentions.members.first();
	if (!member){
		msg.channel.sendMessage("Please tag a vaild member");
	}
	else {
	msg.channel.sendMessage("<@!" + `${member.id}` +"> , Life is nice");
	msg.channel.sendMessage(`${member.user.username}`);
	}
	
	
	let embed = new Discord.RichEmbed()
	.setAuthor("text", "https://bestsecuritysearch.com/wp-content/uploads/2016/10/discord-logo-bss.png")
	.addField("field", "text below field", true)
	.addField("field2", "text below field2", true)
	.setImage("https://image.ibb.co/dkT4yR/XD.png")
	.setFooter("text")
	.setTimestamp()
	.setColor("#b200ff")
	.addBlankField(true);
	msg.channel.send({embed});
}
