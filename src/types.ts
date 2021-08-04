export enum Difficulty {
  Easy = 1,
  Medium,
  Hard,
}

export interface Pair {
  stat: {
    question_id: number;
    question__title: string;
    question__title_slug: string;
    frontend_question_id: number;
  };
  difficulty: {
    level: Difficulty;
  };
}

export interface Problem {
  num_total: number;
  stat_status_pairs: Pair[];
}
