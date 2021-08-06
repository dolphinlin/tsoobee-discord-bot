import { Command } from './types';

const dolphin: Command<void> = {
  name: 'dolphin',
  description: 'Dolphin too handsome',
  resolve: (_, message) => {
    message.channel.send(':heart_eyes: Dolphin so handsome. :heart_eyes:');
  },
};

export default dolphin;
