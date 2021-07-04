import React, { useState } from 'react';

import { Id, Synonym, Word } from 'types';
import useSynonymsSelector from 'Store/Selectors/synonyms';
import { createSynonym, removeSynonym, updateSynonym } from 'Store/Slices/synonyms';
import { useAppDispatch } from 'Hooks/useAppDispatch';

import Button from 'Containers/Button';
import Input from 'Containers/Input';
import IconButton from 'Components/IconButton';
import Icon, { Icons } from 'Components/Icon';
import SynonymCard from 'Components/SynonymCard';

import style from '../styles.module.scss';

function Content(): React.ReactElement {
  const synonyms = useSynonymsSelector();
  const dispatch = useAppDispatch();

  const [editedId, setEditedId] = useState<Id>();
  const [addedSynonym, setAddedSynonym] = useState<Word>();
  const [editedSynonym, setEditedSynonym] = useState<Word>();

  const editSynonymHandler = (synonym: Synonym): void => {
    setEditedId(synonym.id);
    setEditedSynonym(synonym.word);
  };

  const deleteSynonymHandler = (synonym: Synonym): void => {
    dispatch(removeSynonym(synonym.id));
  };

  const addSynonymHandler = (): void => {
    if (addedSynonym) {
      dispatch(createSynonym(addedSynonym));
    }
  };

  return (
    <div className={style.Content}>
      <div className={style.Header}>
        <h4>Синонимы</h4>
        <Icon color="gray-3">{Icons.info}</Icon>
      </div>
      {!editedId && (
        <div className={style.SynonymInput}>
          <div>
            <p>добавление синонима:</p>
            <Input
              value={addedSynonym}
              onChange={(e) => {
                setAddedSynonym(e.target.value);
              }}
              placeholder="Введите название"
            />
          </div>
          <span>
            <Button onClick={addSynonymHandler}>Добавить</Button>
          </span>
        </div>
      )}
      <div className={style.SynonymsList}>
        {synonyms.map((synonym) =>
          editedId === synonym.id ? (
            <div className={style.SynonymInput}>
              <div>
                <p>редактирование синонима:</p>
                <Input
                  value={editedSynonym}
                  onChange={(e) => {
                    setEditedSynonym(e.target.value);
                  }}
                  placeholder="Введите название"
                />
              </div>
              <div className={style.Controls}>
                <Button
                  onClick={() => {
                    if (editedSynonym) {
                      dispatch(updateSynonym({ id: editedId, word: editedSynonym }));
                      setEditedId(undefined);
                      setEditedSynonym(undefined);
                    }
                  }}
                >
                  Сохранить
                </Button>
                <IconButton
                  onClick={() => {
                    setEditedId(undefined);
                    setEditedSynonym(undefined);
                  }}
                  color="blue"
                >
                  {Icons.close}
                </IconButton>
              </div>
            </div>
          ) : (
            <SynonymCard
              onEdit={editSynonymHandler}
              onDelete={deleteSynonymHandler}
              key={synonym.id}
            >
              {synonym}
            </SynonymCard>
          ),
        )}
      </div>
    </div>
  );
}

export default Content;
