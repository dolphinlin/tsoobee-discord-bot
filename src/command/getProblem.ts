import { Command } from './types';

import leetcode from '@/lib/leetcode';
import { Difficulty } from '@/types';

function getDifficultyString(diff: Difficulty) {
  switch (diff) {
    case Difficulty.Easy:
      return 'Easy :green_circle:';
    case Difficulty.Medium:
      return 'Medium :orange_circle:';
    case Difficulty.Hard:
      return 'Hard :red_circle:';
    default:
      return 'Unkonwn';
  }
}

const getProblem: Command<void> = {
  name: 'get',
  resolve: (args, message) => {
    const [serial] = args;

    if (serial !== (+serial).toString()) {
      message.channel.send(`Invalid serial of problem: ${serial}`);
    }

    const problem = leetcode.getProblem(+serial);

    if (problem === null) {
      message.channel.send(`Leetcode problem not found: ${serial}`);
      return;
    }

    message.channel.send(`Serial: ${serial}
Title: ${problem.stat.question__title}
Difficulty: ${getDifficultyString(problem.difficulty.level)}
URL: ${process.env.LEETCODE_PROBLEM_BASEURL}/${
      problem.stat.question__title_slug
    }`);
  },
};

export default getProblem;
