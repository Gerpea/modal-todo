export type Word = string;
export type Id = string;

export interface Synonim {
  id: Id;
  word: Word;
}

export type SynonymsState = Synonim[];
