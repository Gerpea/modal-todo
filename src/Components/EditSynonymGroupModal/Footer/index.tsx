import React from 'react';

import Button from 'Containers/Button';

import style from '../styles.module.css';

export interface Props {
  children: React.ReactNode;
}

function Footer(): React.ReactElement {
  return (
    <div className={style.Footer}>
      <Button type="success">сохранить изменения</Button>
      <Button type="danger">очистить синонимы</Button>
    </div>
  );
}

export default Footer;
