const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

const p = "a!";
client.on('message', msg => {
  if (msg.content.startsWith(p + "repeat ") ) {
        msg.channel.sendMessage("You just typed "+ msg.content.substr("repeat ".length + p.length) + "! ");
  }
    if (msg.content === (p + "checkavatar")){
    // Send the user's avatar URL
    msg.reply(msg.author.avatarURL);
    }
  
  if(msg.content === (p + "msg ")) {
       let target = msg.mentions.members();
       msg.channel.sendMessage(msg.content.substr(p.length + "msg ".length) + msg.target.nickname);
}
  
  if(msg.content === (p + "info")) {
       msg.channel.sendMessage("My prefix is a! and my commands are: checkavatar, help, hi, msg, trigger, repeat");
}
  
  if(msg.content === (p + "trigger")) {
       msg.channel.sendMessage(msg.mentions.everyone + "fuck you all");
}
  
  if(msg.content === (p + "help")) {
       msg.channel.sendMessage("help your ass man im a prematured bot, go to info for more info");
}
  
  if(msg.content === (p + "hi")) {
       msg.channel.sendMessage("hi bitch");
}
});

client.login(process.env.BOT_TOKEN);
