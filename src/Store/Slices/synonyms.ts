import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import AppStorage from 'Storage';
import { SYNONYMS_KEY } from 'Constants';
import { Synonym, Word, Id, SynonymsState } from 'types';
import { generateId } from 'Utils';

const initialState: SynonymsState = AppStorage.getInstance().getItem(SYNONYMS_KEY) || [];

const synonymsSlice = createSlice({
  name: 'synonyms',
  initialState,
  reducers: {
    createSynonym: (state, action: PayloadAction<Word>) => {
      const synonym: Synonym = {
        id: generateId(),
        word: action.payload,
      };
      state.push(synonym);
    },
    updateSynonym: (state, action: PayloadAction<Synonym>) => {
      const idx = state.findIndex((synonym) => synonym.id === action.payload.id);
      if (idx !== -1) {
        state[idx].word = action.payload.word;
      }
    },
    removeSynonym: (state, action: PayloadAction<Id>) => {
      return state.filter((synonym) => synonym.id !== action.payload);
    },
    resetSynonyms: () => {
      return [];
    },
  },
});

const { actions, reducer } = synonymsSlice;

export const { createSynonym, updateSynonym, removeSynonym, resetSynonyms } = actions;

export default reducer;
