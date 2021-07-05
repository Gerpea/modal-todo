import React, { useState } from 'react';

import { Word } from 'types';

import TextInput from 'Containers/TextInput';
import Button from 'Containers/Button';
import Field from 'Components/Field';

import style from '../styles.module.scss';

export interface Props {
  onAddSynonym: (synonym: Word) => void;
}

function AddSynonym({ onAddSynonym }: Props): React.ReactElement {
  const [value, setValue] = useState<Word>('');

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={style.Content}>
      <Field label="Добавление синонима:">
        <TextInput
          className={style.Input}
          placeholder="Введите название"
          value={value}
          onChange={handleChangeValue}
        />
      </Field>
      <div className={style.Controls}>
        <Button
          onClick={() => {
            onAddSynonym(value);
            setValue('');
          }}
        >
          Добавить
        </Button>
      </div>
    </div>
  );
}

export default AddSynonym;