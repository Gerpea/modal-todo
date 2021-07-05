import React, { useState } from 'react';
import clsx from 'clsx';

import { Word } from 'Types';

import TextInput from 'Containers/TextInput';
import Button from 'Containers/Button';
import Field from 'Components/Field';

import style from '../styles.module.scss';

export interface Props {
  className?: string;
  onAddSynonym: (synonym: Word) => void;
}

function AddSynonym({ onAddSynonym, className }: Props): React.ReactElement {
  const styles = clsx(className, style.Content);
  const [value, setValue] = useState<Word>('');
  const [error, setError] = useState<string>();

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(undefined);
    setValue(e.target.value);
  };

  return (
    <div className={styles}>
      <Field label="Добавление синонима:" error={error}>
        <TextInput
          className={style.Input}
          placeholder="Введите название"
          value={value}
          onChange={handleChangeValue}
          error={error}
        />
      </Field>
      <div className={style.Controls}>
        <Button
          onClick={() => {
            if (value && value.length > 0) {
              onAddSynonym(value);
              setValue('');
            } else {
              setError('Заполните поле');
            }
          }}
        >
          Добавить
        </Button>
      </div>
    </div>
  );
}

export default AddSynonym;
