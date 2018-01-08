exports.run = async (client, msg, args, sql) => {
	sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
		if (!row) return message.reply("sadly you do not have any points yet!");
		msg.reply(`you currently have ${row.points} points, good going!`);
    });
}
