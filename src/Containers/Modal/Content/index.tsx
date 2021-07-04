import React from 'react';

import style from '../styles.module.scss';

export interface Props {
  children: React.ReactNode;
}

function ModalContent({ children }: Props): React.ReactElement {
  return <div className={style.Content}>{children}</div>;
}

export default ModalContent;
