const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', async() => {
var server = "642711609768280075"; 
var channel = "643866181421498368";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('** كريدت ؟  **')
    },305);
}) 


client.login(process.env.BOT_TOKEN);

