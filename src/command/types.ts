import type { Message } from 'discord.js';

export interface Command<T> {
  name: string;
  description: string;
  resolve: (args: string[], message: Message) => T;
}
