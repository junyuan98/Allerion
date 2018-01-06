
exports.run = (client, msg, args) => {
	let embed = new Discord.RichEmbed()
	.setAuthor(msg.author.username , msg.author.avatarURL)
	.setThumbnail(msg.author.avatarURL)
	.addField("Username", `${msg.author.tag}`)
	.addField("UserID", `${msg.author.id}`)
	.addField("Join server date", "Long long ago(_i guess_)")
	.setTimestamp()
	.setColor("#b200ff")
	.addBlankField(true);

	msg.channel.send({embed});
}
