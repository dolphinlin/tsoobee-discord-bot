import { Client } from 'discord.js';

const client = new Client();

// ready listener
client.on('ready', () => {
  console.log(`slack bot is ready: ${new Date().toISOString()}`);
});

const CMD = '!leet';
// msg listener
client.on('message', msg => {
  // e.g. CMD xxx xxx
  const [prefix, ...args] = msg.content.split(' ');

  if (prefix === CMD) {
    msg.channel.send(`get cmd with params: ${args.join(', ')}`);
  }
});

// lunch bot
client.login(process.env.DISCORD_BOT_TOKEN);
