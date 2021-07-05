import React from 'react';

import { Synonym } from 'Types';

import IconButton from 'Components/IconButton';
import { Icons } from 'Components/Icon';

import style from './styles.module.scss';

export interface Props {
  children: Synonym;
  onEdit: (synonym: Synonym) => void;
  onDelete: (synonym: Synonym) => void;
}

function SynonymCard({ onEdit, onDelete, children: synonym }: Props): React.ReactElement {
  return (
    <div className={style.SynonymCard}>
      <p className={style.SynonymCardText}>{synonym.word}</p>
      <div className={style.SynonymCardControls}>
        <IconButton
          color="blue"
          onClick={() => {
            onEdit(synonym);
          }}
        >
          {Icons.pencil}
        </IconButton>
        <IconButton
          color="red"
          onClick={() => {
            onDelete(synonym);
          }}
        >
          {Icons.trash}
        </IconButton>
      </div>
    </div>
  );
}

export default SynonymCard;
