exports.run = (client, msg, args) => {
    if (msg.author.id === ALLERIA)
        msg.channel.sendMessage("Greetings owner <3 Have a nice day~");
    else
        msg.channel.sendMessage("Greetings Discorder " + msg.author.id + ", have a nice day");
}
