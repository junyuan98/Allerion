exports.run = (client, msg, args) => {
  const scoreLevel = client.points.get(message.author.id).level;
  !scoreLevel ? message.channel.send('You have no levels yet.') : message.channel.send(`You are currently level ${scoreLevel}!`);
}
