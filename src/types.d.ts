export type Word = string;
export type Id = string;

export interface Synonym {
  id: Id;
  word: Word;
}

export type SynonymsState = Synonym[];
