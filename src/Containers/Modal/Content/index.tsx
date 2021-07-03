import React from 'react';

import style from '../styles.module.css';

export interface Props {
  children: React.ReactNode;
}

function ModalContent({ children }: Props): React.ReactElement {
  return <div className={style.Content}>{children}</div>;
}

export default ModalContent;
