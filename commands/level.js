exports.run = async (client, msg, args) => {
        const scoreLevel = client.points.get(msg.author.id).level;
        !scoreLevel ? msg.channel.send('You have no levels yet.') : msg.channel.send(`You are currently level ${scoreLevel}!`);
}
