import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Synonim, Word, Id, SynonymsState } from 'types';
import { generateId } from 'Utils';

import { RootState } from 'Store';

const initialState: SynonymsState = [];

const synonymsSlice = createSlice({
  name: 'synonyms',
  initialState,
  reducers: {
    createSynonym: (state, action: PayloadAction<Word>) => {
      const synonim: Synonim = {
        id: generateId(),
        word: action.payload,
      };
      state.push(synonim);
    },
    updateSynonym: (state, action: PayloadAction<Synonim>) => {
      const idx = state.findIndex((synonym) => synonym.id === action.payload.id);
      if (idx !== -1) {
        state[idx].word = action.payload.word;
      }
    },
    removeSynonym: (state, action: PayloadAction<Id>) => {
      return state.filter((synonym) => synonym.id !== action.payload);
    },
  },
});

const { actions, reducer } = synonymsSlice;

export const { createSynonym, updateSynonym, removeSynonym } = actions;

export const selectSynonyms = (state: RootState): SynonymsState => state.synonyms as SynonymsState;

export default reducer;
