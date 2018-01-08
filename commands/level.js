exports.run = (client, msg, args, userData) => {
	msg.reply(`You are currently level ${userData[msg.author.id].level}, with ${userData[msg.author.id].points} points.`);
}
