import React from 'react';

import Button from 'Containers/Button';

import style from '../styles.module.scss';

function Footer(): React.ReactElement {
  return (
    <div className={style.Footer}>
      <Button type="success" onClick={() => void {}}>
        сохранить изменения
      </Button>
      <Button type="danger" onClick={() => void {}}>
        очистить синонимы
      </Button>
    </div>
  );
}

export default Footer;
