import React from 'react';

import Icon, { Icons } from 'Components/Icon';

import style from './styles.module.scss';

function Info(): React.ReactElement {
  return (
    <div className={style.Info}>
      <h4>Синонимы</h4>
      <Icon color="gray-3">{Icons.info}</Icon>
    </div>
  );
}

export default Info;
