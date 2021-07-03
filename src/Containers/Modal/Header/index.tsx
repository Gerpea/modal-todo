import React from 'react';

import style from '../styles.module.css';

export interface Props {
  children: React.ReactNode;
}

function ModalHeader({ children }: Props): React.ReactElement {
  return <div className={style.Header}>{children}</div>;
}

export default ModalHeader;
