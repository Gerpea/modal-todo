import { SynonymsState } from 'Types';

import synonymsReducer, {
  createSynonym,
  updateSynonym,
  removeSynonym,
  resetSynonyms,
} from 'Store/Slices/synonyms';

describe('Synonyms reducer tests', () => {
  test('Creates a new synonym', () => {
    let state: SynonymsState = [];
    const expected = 'Synonym';

    state = synonymsReducer(state, createSynonym(expected));
    const addedSynonym = state.find((s) => s.word === expected);

    expect(addedSynonym).not.toBeNull();
  });

  test('Updates a synonym', () => {
    const id = '1';
    let state: SynonymsState = [
      {
        id,
        word: 'Synonym',
      },
    ];
    const expected = 'NewSynonym';

    state = synonymsReducer(state, updateSynonym({ id: id, word: expected }));
    const updatedSynonym = state.find((s) => s.id === id);

    expect(updatedSynonym?.word).toBe(expected);
  });

  test('Deletes a synonym', () => {
    const id = '1';
    let state: SynonymsState = [
      {
        id,
        word: 'Synonym',
      },
    ];
    const initialSynonymsCount: number = state.length;

    state = synonymsReducer(state, removeSynonym(id));

    expect(state.length).toBe(initialSynonymsCount - 1);
  });

  test('Reset synonyms', () => {
    const id = '1';
    let state: SynonymsState = [
      {
        id,
        word: 'Synonym',
      },
    ];

    state = synonymsReducer(state, resetSynonyms());

    expect(state.length).toBe(0);
  });
});
