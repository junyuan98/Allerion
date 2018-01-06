exports.run = (client, msg, args) => {
    msg.reply(msg.author.avatarURL).catch(console.error);
}
