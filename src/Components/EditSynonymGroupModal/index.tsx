import React, { useState } from 'react';

import { Id, Synonym, Word } from 'types';
import useSynonymsSelector from 'Store/Selectors/synonyms';
import { createSynonym, removeSynonym, updateSynonym } from 'Store/Slices/synonyms';
import { useAppDispatch } from 'Hooks/useAppDispatch';

import Modal from 'Containers/Modal';
import Input from 'Containers/Input';
import Button from 'Containers/Button';
import IconButton from 'Components/IconButton';
import Icon, { Icons } from 'Components/Icon';
import SynonymCard from 'Components/SynonymCard';

import Footer from './Footer';

import style from './styles.module.css';

export interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function EditSynonymGroupModal({ isOpen, onClose }: Props): React.ReactElement {
  const synonyms = useSynonymsSelector();
  const dispatch = useAppDispatch();
  const [editedId, setEditedId] = useState<Id>();
  const [addedSynonym, setAddedSynonym] = useState<Word>();
  const [editedSynonym, setEditedSynonym] = useState<Word>();

  const editSynonymHandler = (synonym: Synonym): void => {
    setEditedId(synonym.id);
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
    <div>
      <Modal
        isOpen={isOpen}
        title="Редактирование группы синонимов поисковых фраз"
        onClose={onClose}
        footer={<Footer />}
      >
        <div>
          <h4>Синонимы</h4>
          <Icon color="gray-3">{Icons.info}</Icon>
        </div>
        {editedId === undefined && (
          <div>
            <p>добавление синонима:</p>
            <Input
              onChange={(e) => {
                setAddedSynonym(e.target.value);
              }}
            />
            <Button onClick={addSynonymHandler}>Добавить</Button>
          </div>
        )}
        <div>
          {synonyms.map((synonym) =>
            editedId === synonym.id ? (
              <div>
                <p>редактирование синонима:</p>
                <Input
                  onChange={(e) => {
                    setEditedSynonym(e.target.value);
                  }}
                />
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
      </Modal>
    </div>
  );
}

export default EditSynonymGroupModal;
