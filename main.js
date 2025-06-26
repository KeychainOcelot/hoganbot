//Dependencies
import { Client, Events, GatewayIntentBits } from 'discord.js';
import { REST, Routes } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
import * as fs from 'node:fs';
import * as config from './config.json' with { type: "json" };

//Trigger words for the bot
const triggerWords = ['hogan pls', 'job', 'brother', 'hogan gif'];

//Bot responses
let quotes = fs.readFileSync('quotes.txt').toString().split("\n");
let gifs = fs.readFileSync('gifs.txt').toString().split("\n");

//Slash commands
const commands = [
  {
    name: 'brother',
    description: 'You get tales of my escapades, brother',
  },
];

const rest = new REST({ version: '10' }).setToken(config.token);

try {
  console.log('Started refreshing application (/) commands.');

  await rest.put(Routes.applicationCommands(Client), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}

//Bot ready
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

//New attempt at bot logic (circa 2025)
client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'brother') {
    await interaction.reply(quotes[Math.floor(Math.random() * quotes.length)] + ', brother');
  }
})



//Bot main logic
//client.on("message", msg => {
//  if (msg.author.bot) return false;

//  triggerWords.forEach((word) => {
//    if (msg.content.includes(word)) {
//      if (word === 'hogan pls') {
//        msg.reply(quotes[Math.floor(Math.random() * quotes.length)] + ', brother');
//      } else if (word === 'job') {
//        msg.reply("That doesn't work for me, brother.");
//      } else if (word === 'hogan gif') {
//        msg.reply(gifs[Math.floor(Math.random() * gifs.length)]);
//      } else if (word === 'brother') {
//        msg.reply('...brother.');
//      }
//    }
//  });
//});

//Bot config token
client.login(config.token)
