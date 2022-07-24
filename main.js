const { Client, Intents } = require('discord.js');
const Discord = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const readline = require("readline");
const fs = require("fs");
const { allowedNodeEnvironmentFlags } = require('process');
const config = require('./config.json')

// const file = readline.createInterface({
//     input: fs.createReadStream('quotes.txt'),
//     output: process.stdout,
//     terminal: false
// })

let quotes = fs.readFileSync('quotes.txt').toString().split("\n");
const triggerWords = ['hogan pls', 'job'];

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

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

    // if (msg.content === "hogan pls") {
        
    // } else if(msg.content === "job") {
    // }
});

client.login(config.token)