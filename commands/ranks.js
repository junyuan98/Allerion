const Discord = require("discord.js");

exports.run = async (client, msg, args) => {
	const embed = new Discord.RichEmbed()
	.setDescription(`**RANKS AVAILABLE**`)
	.addField("**Basic Ranks**",`  
:baby: Beginner - 0 Lifetime Alleriantiums
:boy: Apprentice - 100 Lifetime Alleriantiums
:cowboy: Jobless - 500 Lifetime Alleriantiums, Available for Tier 3 Classes
    `,)
    .addField("**Tier 3 Classes - FREE**",`  
:smiling_imp: Goblins   - Gains 1.2 ∀ per message instead of 1∀
:spy: Humans    - Extra 150 ∀ per 500 messages sent
:skull: Undeads   - Daily rewards are 240∀ instead of 200∀
	`,)
	.addField("**Tier 2 Classes - Costs 2000 Alleriantiums and 3 RaffleTickets**",`  
:smiling_imp: Gambling Imps         - Each message has a 55% chance of getting 2∀ instead of 1∀
:smiling_imp: Alchemy Greevils      - Gains 1.5 ∀ per message
:spy: The Wizard            - Another Extra 0.5 RaffleTickets per 500 messages sent
:spy: The Golden Troop      - Another Extra 150 ∀ per 500 messages sent
:skull: The Soul Hunter       - Daily rewards 300∀
:skull: The Lich              - Daily rewards ranges from 250 to 350∀
	`,)
	.addField("**Tier 1 Classes - Costs 5000 Alleriantiums and 1 GoldTicket**",`  
	NOT AVAILABLE YET
	`,)
	.setFooter("The Allerion Ranking System")
	.setTimestamp()
	.setColor("#FF8C00");
	msg.channel.send({embed});
};

exports.help = {
	name: "ranks",
	description: "List out all the ranks available.",
	usage: "`a!ranks`"
};
