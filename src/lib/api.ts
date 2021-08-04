import Axios from 'axios';

import { Problem } from '@/types';

const client = Axios.create({
  baseURL: process.env.LEETCODE_ENDPOINT,
});

export const getAllProblem = () => client.get<Problem>('/problems/algorithms/');
