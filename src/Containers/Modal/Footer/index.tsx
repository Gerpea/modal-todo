import React from 'react';

import style from './styles.module.scss';

export interface Props {
  children: React.ReactNode;
}

function ModalFooter({ children }: Props): React.ReactElement {
  return <div className={style.Footer}>{children}</div>;
}

export default ModalFooter;
