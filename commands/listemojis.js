exports.run = (client, msg, args) => {
    const emojiList = msg.guild.emojis.map(e=>e.toString()).join(" test ");
    msg.channel.send(emojiList);
}
