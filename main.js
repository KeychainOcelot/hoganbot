//Dependencies

const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const { token } = require('./config.json');

//Trigger words for the bot
const triggerWords = ['hogan pls', 'job', 'brother', 'hogan gif'];

//Bot responses
let quotes = fs.readFileSync('quotes.txt').toString().split("\n");
let gifs = fs.readFileSync('gifs.txt').toString().split("\n");

//Bot client Instance
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent
	]
});

//Bot going live
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}.`);
});

//Event listening
client.on('messageCreate', message => {
	if (message.author.bot) return;

	const messageContent = message.content.toLowerCase();

	for (const [index, trigger] of triggerWords.entries()) {
        if (messageContent.includes(trigger)) {
            
            // Send GIF for 'hogan gif' trigger, quotes for remaining triggers
            if (trigger === 'hogan gif') {
                const gif = gifs[Math.floor(Math.random() * gifs.length)];
                message.reply(gif);
            } else {
                const quote = quotes[Math.floor(Math.random() * quotes.length)];
                message.reply(quote);
            }
            
            return;
        }
    }
});

//Bot token login
client.login(token);
