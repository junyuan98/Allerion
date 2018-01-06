exports.run = (client, message, args) => {
    msg.channel.sendMessage( msg.author + ", Pong! My ping is " + client.ping + "ms." ).catch(console.error);
}
