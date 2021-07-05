import React from 'react';

import Button from 'Containers/Button';

import style from './styles.module.scss';

function Footer(): React.ReactElement {
  const handleSaveSynonyms = () => {
    console.log('save');
  };

  const handleRemoveSynonyms = () => {
    console.log('remove');
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
