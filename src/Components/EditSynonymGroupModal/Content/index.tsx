import React, { useState } from 'react';

import { Id, Synonym, Word } from 'Types';

import { useAppDispatch } from 'Hooks/useAppDispatch';

import useSynonymsSelector from 'Store/Selectors/synonyms';
import { createSynonym, removeSynonym, updateSynonym } from 'Store/Slices/synonyms';

import AddSynonym from './SynonymInputs/AddSynonym';
import Info from './Info';
import SynonymsList from './SynonymsList';

import style from './styles.module.scss';

function Content(): React.ReactElement {
  const synonyms = useSynonymsSelector();
  const dispatch = useAppDispatch();

  const [editedId, setEditedId] = useState<Id>();

  const handleStartEditSynonym = (synonym: Synonym): void => {
    setEditedId(synonym.id);
  };

  const handleCancelEditSynonym = (): void => {
    setEditedId(undefined);
  };

  const handleRemoveSynonyms = (synonym: Synonym): void => {
    dispatch(removeSynonym(synonym.id));
  };

  const handleUpdateSynonym = (synonym: Synonym): void => {
    if (editedId) {
      dispatch(updateSynonym({ id: editedId, word: synonym.word }));
      setEditedId(undefined);
    }
  };

  const handleAddSynonym = (synonym: Word): void => {
    dispatch(createSynonym(synonym));
  };

  return (
    <div className={style.Content}>
      <Info />
      {!editedId && <AddSynonym onAddSynonym={handleAddSynonym} className={style.AddPadding} />}
      <SynonymsList
        synonyms={synonyms}
        editedId={editedId}
        onEdit={handleStartEditSynonym}
        onCancelEdit={handleCancelEditSynonym}
        onRemove={handleRemoveSynonyms}
        onUpdate={handleUpdateSynonym}
      />
    </div>
  );
}

export default Content;
