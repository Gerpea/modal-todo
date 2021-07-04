import React from 'react';

import IconButton from 'Components/IconButton';
import { Icons } from 'Components/Icon';

import style from '../styles.module.scss';

export interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

function ModalHeader({ children, onClose }: Props): React.ReactElement {
  return (
    <div className={style.Header}>
      <h3>{children}</h3>
      <IconButton color="blue" onClick={onClose}>
        {Icons.close}
      </IconButton>
    </div>
  );
}

export default ModalHeader;
