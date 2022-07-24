//Dependencies
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const fs = require("fs");
const config = require('./config.json')

//Trigger words for the bot
const triggerWords = ['hogan pls', 'job'];

//Bot responses
let quotes = fs.readFileSync('quotes.txt').toString().split("\n");

//Bot ready
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

//Bot main logic
client.on("message", msg => {
    if(msg.author.bot) return false;

    triggerWords.forEach((word) => {
        if(msg.content.includes(word)) {
            if(word === 'hogan pls') {
                msg.reply(quotes[Math.floor(Math.random() * quotes.length)] + ', brother');
            } else if(word === 'job') {
                msg.reply("That doesn't work for me, brother.");
            }
        }
    });
});

//Bot config token
client.login(config.token)