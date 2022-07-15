const { Client, Intents } = require('discord.js');
const Discord = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const readline = require("readline");
const fs = require("fs");
const { allowedNodeEnvironmentFlags } = require('process');

const file = readline.createInterface({
    input: fs.createReadStream('quotes.txt'),
    output: process.stdout,
    terminal: false
})

let quotes = fs.readFileSync('quotes.txt').toString().split("\n");

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
    if (msg.content === "hogan pls") {
        msg.reply(quotes[Math.floor(Math.random() * quotes.length)] + ', brother');
    }
});

client.login('OTk3NDg1NTM4NTUyNTc4MTUw.G855jo.ESp6WTEeGaLm6fjgoRxMrR3y8qnFKB9PndDjlM')