exports.run = (client, msg, args, userData) => {
	msg.channel.sendMessage("You currently have **" + userData[msg.author.id].messagesSent + "** money!");
}
