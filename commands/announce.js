const Discord = require("discord.js");
                    
exports.run = async (client, msg, args) => {
    if (msg.author.id === "331053004910362624"){
        msg.channel.send( msg.content.substr("a!announce ".length) );
        msg.delete();
    }
    else
        msg.reply('You have no permission to use this command');
};

exports.help = {
	name: "announce",
	description: "Announce an announcement, duh.(For Alleria Only)",
	usage: "`a!announce [announcement]`"
};
