import { Command } from './types';

import leetcode from '@/lib/leetcode';

const reload: Command<void> = {
  name: 'reload',
  description: 'reload pool of problem.',
  resolve: (_, message) => {
    // return eraly
    if (leetcode.getPoolTTL() > Date.now()) {
      message.channel.send(
        'Leetcode problem pool is FRESH :shrimp: :shrimp: :shrimp: '
      );
      return;
    }

    const msgRsp = message.channel.send(
      'Leetcode problem pool is reloading... :poop:'
    );

    msgRsp.then(msg => {
      leetcode.reload().then(res => {
        msg.edit(`Leetcode problem pool is reloaded! :banana:
Total: ${res?.num_total}`);
      });
    });
  },
};

export default reload;
