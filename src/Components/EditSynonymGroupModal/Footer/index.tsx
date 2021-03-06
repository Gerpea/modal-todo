import React from 'react';

import { SYNONYMS_KEY } from 'Constants';
import AppStorage from 'Storage';

import { useAppDispatch } from 'Hooks/useAppDispatch';
import { resetSynonyms } from 'Store/Slices/synonyms';
import useSynonymsSelector from 'Store/Selectors/synonyms';

import Button from 'Containers/Button';

import style from './styles.module.scss';

function Footer(): React.ReactElement {
  const synonyms = useSynonymsSelector();
  const dispatch = useAppDispatch();

  const handleSaveSynonyms = () => {
    AppStorage.getInstance().setItem(SYNONYMS_KEY, synonyms);
  };

  const handleRemoveSynonyms = () => {
    dispatch(resetSynonyms());
    AppStorage.getInstance().removeItem(SYNONYMS_KEY);
  };

  return (
    <div className={style.Footer}>
      <Button type="success" onClick={handleSaveSynonyms}>
        сохранить изменения
      </Button>
      <Button type="danger" onClick={handleRemoveSynonyms}>
        очистить синонимы
      </Button>
    </div>
  );
}

export default Footer;
