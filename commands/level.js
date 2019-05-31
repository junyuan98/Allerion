exports.run = async (client, msg, args, sql) => {
    sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
            if (!row) return msg.reply("Your current level is 0");
            msg.reply(`Your current level is ${row.level}, Points: ${row.points} / ${row.level * 10}`);
    });
};

exports.help = {
	name: "level",
	description: "Checks your current level and progression.",
	usage: "`a!level`"
};