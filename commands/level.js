exports.run = (client, msg, args, userData) => {
		msg.reply(`You are currently level ${userData.level}, with ${userData.points} points.`);
}
