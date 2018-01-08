exports.run = async (client, msg, args, sql) => {
        sql.get(`SELECT * FROM scores WHERE userId ="${msg.author.id}"`).then(row => {
                if (!row) return msg.reply("Your current level is 0");
                msg.reply(`Your current level is ${row.level}`);
        });
}
