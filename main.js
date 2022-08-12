//Dependencies
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
const fs = require("fs");
const config = require('./config.json')

//Trigger words for the bot
const triggerWords = ['hogan pls', 'job', 'hogan gif'];

//Bot responses
let quotes = fs.readFileSync('quotes.txt').toString().split("\n");
let gifs = fs.readFileSync('gifs.txt').toString().split("\n");

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
            } else if(word === 'hogan gif') {
                msg.reply(gifs[Math.floor(Math.random() * gifs.length)]);
            }
        }
    });
});

//Bot config token
client.login(config.token)