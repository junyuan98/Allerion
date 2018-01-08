exports.run = (client, msg, args) => {
	const scorePoints = client.points.get(msg.author.id).points;
	!scorePoints ? msg.channel.send('You have no points yet.') : msg.channel.send(`You have ${scorePoints} points!`);
}
