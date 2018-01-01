const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

const p = "a!";
client.on("message", async message => {
  
  if(message.content === p + "hi") {
    message.channel.send("Hi bitch.");
   }
  
  if(message.content === p + "ping") {
    message.channel.send("pong!");
  }
});

client.login(process.env.BOT_TOKEN);
