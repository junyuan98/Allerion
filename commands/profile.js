exports.run = (client, msg, args) => {
	
	let member = msg.mentions.members.first();
	msg.channel.sendMessage("<@!" + `${member.id}` +"> , Life is nice");
	msg.channel.sendMessage(`${member.user.username}`);
	
	
	let embed = new Discord.RichEmbed()
	.setAuthor(member.username , member.user.avatarURL)
	.setThumbnail(member.user.avatarURL)
	.addField("Username", `${member.user.tag}`)
	.addField("UserID", `${member.user.id}`)
	.addField("Join server date", "Long long ago(_i guess_)")
	.setTimestamp()
	.setColor("#b200ff")
	.addBlankField(true);
	
	msg.channel.send({embed});
}
