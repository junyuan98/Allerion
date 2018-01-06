exports.run = (client, msg, args) => {
    if (msg.author.id === "331053004910362624"){
        if(!args || args.size < 1) return msg.reply("Must provide a command name to reload.");
        // the path is relative to the *current folder*, so just ./filename.js
        delete require.cache[require.resolve(`./${args[0]}.js`)];
        msg.reply(`The command ${args[0]} has been reloaded`);
    }
    else
        msg.reply('You have no permission to use this command');
};
