client.pointsMonitor = (client, msg) => {
        if (msg.channel.type !=='text') return;
        const settings = client.settings.get(msg.guild.id);
        if (msg.content.startsWith(settings.prefix)) return;
        const score = client.points.get(msg.author.id) || { points: 0, level: 0 };
        score.points++;
        const curLevel = Math.floor(0.5 * Math.sqrt(score.points));
        if (score.level < curLevel) {
                msg.reply(`You've leveled up to level **${curLevel}**!`);
                score.level = curLevel;
        }
        client.points.set(msg.author.id, score);
};
