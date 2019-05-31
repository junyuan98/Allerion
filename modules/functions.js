module.exports = (client) => {

    client.currencyMonitor = (client, msg) => {
        if (msg.channel.type !=='text') return;
        if (msg.content.startsWith("a!")) return;
        const money = client.Alleriantium.get(msg.author.id) || { name:'None', lastDaily:'Not Collected', LifetimeAlleriantiums: 0, Alleriantium: 0, RaffleTickets: 0 , Rank: 'Beginner'};
        //If they have Alleriantiums but no Lifetime counts yet (cause Lifetime are added halfway)
        if (!money.RaffleTickets) {money.RaffleTickets = 0;}
        if (!money.Alleriantium) { money.Alleriantium = 0;}
        if (!money.Rank){ money.Rank = 'Beginner'; }
        if (!money.LifetimeAlleriantiums){ money.LifetimeAlleriantiums = 0; }
        if (!money.lastDaily){money.lastDaily = 'Not Collected';}
        if (money.name != `${msg.author.tag}`) {money.name = `${msg.author.tag}`;}

        //Adds 1 Alleriantium per message.
        money.Alleriantium++;
        money.LifetimeAlleriantiums++;
        if (money.Rank ==='Goblin') {
            money.Alleriantium += 0.2000000000000;
            money.LifetimeAlleriantiums += 0.2000000000000;
        }
        
        //500 message bonus
        if(money.LifetimeAlleriantiums % 500 === 0){
            if (money.Rank === 'Human') { 
                money.Alleriantium += 150;
                money.LifetimeAlleriantiums += 150;
            }
            money.RaffleTickets++;
            msg.channel.send(`Congratz ${msg.author.tag}! You gained a :tickets: raffleTicket for sending 500 messages! Keep it up!`);
        }


        //Rank checking
        if (money.LifetimeAlleriantiums >= 200 && money.Rank == 'Beginner'){
            msg.channel.send(`Congratz ${msg.author.tag}! Your rank has upgraded from Beginner to Apprentice!`);
            money.Rank = 'Apprentice';
        }
        if (money.LifetimeAlleriantiums >= 500 && money.Rank == 'Apprentice'){
            msg.channel.send(`Congratz ${msg.author.tag}! Your rank has upgraded from Apprentice to Jobless!(sorry for that) `);
            money.Rank = 'Jobless';
        }
        
        client.Alleriantium.set(msg.author.id, money);
        const AlleriantiumNumber1 = client.Alleriantium.get(msg.author.id).Alleriantium;
        const lifetimecash1 = client.Alleriantium.get(msg.author.id).LifetimeAlleriantiums;
        money.LifetimeAlleriantiums = lifetimecash1.toFixed(2);
        money.Alleriantium = AlleriantiumNumber1.toFixed(2);
        client.Alleriantium.set(msg.author.id, money);
      };

};
