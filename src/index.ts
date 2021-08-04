import { Client } from 'discord.js';

import leetcode from '@/lib/leetcode';

import commander from './command';

const client = new Client();

// ready listener
client.on('ready', () => {
  console.log(`slack bot is ready: ${new Date().toISOString()}`);

  leetcode.reload();
});

const validPrefix = '!leet';
// msg listener
client.on('message', msg => {
  // e.g. CMD xxx xxx
  const [prefix, cmd, ...args] = msg.content.split(' ');

  if (prefix === validPrefix) {
    commander(cmd, args, msg);
  }
});

// lunch bot
client.login(process.env.DISCORD_BOT_TOKEN);
