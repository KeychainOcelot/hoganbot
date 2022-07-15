const { Client, Intents } = require('discord.js');
const Discord = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
    if(msg.content === "hogan pls" || msg.content === "job") {
        msg.reply("That doesn't work for me, brother");
    }
    else if (msg.content === "jabroni") {
        msg.reply("Don't work yourself into a shoot, brother");
    }
    else if (msg.content === "worked shoot") {
        msg.reply("That Ram Iyer is a jabroni mark, brother");
    }
})

client.login('OTk3NDg1NTM4NTUyNTc4MTUw.G855jo.ESp6WTEeGaLm6fjgoRxMrR3y8qnFKB9PndDjlM')