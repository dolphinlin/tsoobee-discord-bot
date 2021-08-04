import { Pair } from '@/types';
import { getAllProblem } from './api';

class Leetcode {
  private _ttl: number;
  private _map: Map<number, Pair>;

  constructor() {
    this._ttl = 0;
    this._map = new Map();
  }

  async reload() {
    if (Date.now() < this._ttl) return;
    // clean old data
    this._map.clear();

    const res = await getAllProblem();

    // set problem to cache
    res.data.stat_status_pairs.forEach(pair => {
      const { stat } = pair;
      this._map.set(stat.frontend_question_id, pair);
    });

    console.log(`reload problem success, count: ${res.data.num_total}`);
  }

  getProblem(serial: number): Pair | null {
    if (this._map.has(serial)) {
      return this._map.get(serial)!;
    }

    return null;
  }
}

let instance: Leetcode | null = null;

function getInstance() {
  if (instance === null) {
    instance = new Leetcode();
  }

  return instance;
}

export default getInstance();
