import React from 'react';

import style from '../styles.module.css';

export interface Props {
  children: React.ReactNode;
}

function ModalHeader({ children }: Props): React.ReactElement {
  return <h2 className={style.Header}>{children}</h2>;
}

export default ModalHeader;
