exports.run = (client, msg, args) => {
        var number = Math.floor(Math.random() * args.length);
        msg.channel.sendMessage("You have rolled " + `${args[number]}` + "!");
}
        
