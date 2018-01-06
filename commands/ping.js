exports.run = (client, msg, args) => {
    msg.channel.sendMessage( msg.author + ", Ping Pong! My ping is " + client.ping + "ms." ).catch(console.error);
}
