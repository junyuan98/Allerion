const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

const p = "a!";
client.on('message', msg => {
  if(msg.content === (p + "msg ")) {
       let target = msg.mentions.users.first();
       msg.target.sendMessage(msg.content.substr(p.length + "msg ".length) + msg.author.nickname);
}
  
  if(msg.content === (p + "info")) {
       msg.channel.sendMessage("My prefix is a! and my commands have only 2: help and hi.");
}
  
  if(msg.content === (p + "help")) {
       msg.channel.sendMessage("help your ass man im a prematured teenage bot");
}
  
  if(msg.content === (p + "hi")) {
       msg.channel.sendMessage("hi bitch");
}

client.login(process.env.BOT_TOKEN);
