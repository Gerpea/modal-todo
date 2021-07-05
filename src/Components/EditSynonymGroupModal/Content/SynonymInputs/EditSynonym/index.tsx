import React, { useState } from 'react';
import clsx from 'clsx';

import { Word } from 'Types';

import TextInput from 'Containers/TextInput';
import Button from 'Containers/Button';
import IconButton from 'Components/IconButton';
import { Icons } from 'Components/Icon';
import Field from 'Components/Field';

import style from '../styles.module.scss';

export interface Props {
  initialValue: Word;
  className?: string;
  onEdit: (synonym: Word) => void;
  onCancelEdit: () => void;
}

function EditSynonym({ initialValue, onEdit, onCancelEdit, className }: Props): React.ReactElement {
  const styles = clsx(className, style.Content);
  const [value, setValue] = useState<Word>(initialValue);
  const [error, setError] = useState<string>();

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(undefined);
    setValue(e.target.value);
  };

  return (
    <div className={styles}>
      <Field label="Редактирование синонима:" error={error}>
        <TextInput
          className={style.Input}
          placeholder="Введите название"
          value={value}
          onChange={handleChangeValue}
          error={error}
        />
      </Field>
      <div className={style.Controls}>
        <>
          <Button
            onClick={() => {
              if (value && value.length > 0) {
                onEdit(value);
              } else {
                setError('Заполните поле');
              }
            }}
          >
            Сохранить
          </Button>
          <IconButton onClick={onCancelEdit} color="blue">
            {Icons.close}
          </IconButton>
        </>
      </div>
    </div>
  );
}

export default EditSynonym;
