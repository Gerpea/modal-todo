import React from 'react';

import { Id, Synonym, SynonymsState } from 'Types';

import SynonymCard from '../SynonymCard';
import EditSynonym from '../SynonymInputs/EditSynonym';

import style from './styles.module.scss';

export interface Props {
  synonyms: SynonymsState;
  editedId: Id | undefined;
  onUpdate: (synonym: Synonym) => void;
  onEdit: (synonym: Synonym) => void;
  onCancelEdit: () => void;
  onRemove: (synonym: Synonym) => void;
}

function SynonymsList({
  synonyms,
  onUpdate,
  onEdit,
  onCancelEdit,
  onRemove,
  editedId,
}: Props): React.ReactElement {
  return (
    <ul className={style.List}>
      {synonyms.map((synonym) =>
        editedId === synonym.id ? (
          <EditSynonym
            className={style.EditPadding}
            initialValue={synonym.word}
            onEdit={(value) => onUpdate({ id: editedId, word: value })}
            onCancelEdit={onCancelEdit}
            key={synonym.id}
          />
        ) : (
          <SynonymCard onEdit={onEdit} onDelete={onRemove} key={synonym.id}>
            {synonym}
          </SynonymCard>
        ),
      )}
    </ul>
  );
}

export default SynonymsList;
