
exports.run = (client, msg, args) => {
        var number = Math.floor(Math.random() * args.length);
        msg.channel.sendMessage("You have rolled " + `${args[number]}` + "!");
        
        const embed = new Discord.RichEmbed()
        .setAuthor("ALLERION ROLLS", client.user.avatarURL)   
        .setColor(0x00AE86)
        .setDescription("You have rolled " + `${args[number]}` + "!")
        .setFooter("Gambling is bad")
        .setTimestamp()
        .addBlankField(true);
        
        msg.channel.send({embed});
        
}
        
