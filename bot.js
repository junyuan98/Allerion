const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

const p = "a!";
client.on('message', msg => {
  if (msg.content.startsWith(p + "repeat ") ) {
        msg.channel.sendMessage("You just typed "+ msg.content.substr("test ".length + p.length) + "! ");
}
  
  if (msg.content === (p + "random") ) {
        var x = Math.floor((Math.random() * 2 + 1);
        if (x === 1){ 
          msg.channel.sendMessage("1")
        };
    else {
      msg.channel.sendMessage("2");
    }
}
    
  if(msg.content === (p + "info")) {
       msg.channel.sendMessage("My prefix is a! and my commands are: repeat, help and hi.");
}
  
  if(msg.content === (p + "help")) {
       msg.channel.sendMessage("help your ass man im a prematured teenage bot");
}
  
  if(msg.content === (p + "hi")) {
       msg.channel.sendMessage("hi bitch");
}
});

client.login(process.env.BOT_TOKEN);
