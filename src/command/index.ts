import { Message } from 'discord.js';

import { Command } from './types';
import getProblem from './getProblem';
import reload from './reload';

const commands: Record<string, Command<any>> = {
  get: getProblem,
  reload,
};

const allCmdsDesc = Object.values(commands)
  .map(resolver => {
    const current = [resolver.name, resolver.description];

    return current.join(' - ');
  })
  .join('\n');

function commander(cmd: string, args: string[], message: Message) {
  // !leet help
  if (cmd === 'help') {
    message.channel.send(`\`\`\`
${allCmdsDesc}
\`\`\``);
    return;
  }

  const command = commands[cmd];

  if (!command) {
    message.channel.send(`Command not found: ${cmd}`);
    return;
  }

  command.resolve(args, message);
}

export default commander;
