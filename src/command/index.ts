import { Message } from 'discord.js';

import { Command } from './types';
import getProblem from './getProblem';
import reload from './reload';

const commands: Record<string, Command<any>> = {
  get: getProblem,
  reload,
};

function commander(cmd: string, args: string[], message: Message) {
  const command = commands[cmd];

  if (!command) {
    message.channel.send(`Command not found: ${cmd}`);
    return;
  }

  command.resolve(args, message);
}

export default commander;
