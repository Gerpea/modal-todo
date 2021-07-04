import React from 'react';
import clsx from 'clsx';

import style from './styles.module.scss';

export interface Props {
  type?: 'primary' | 'success' | 'danger';
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

function Button({ type = 'primary', className, onClick, children }: Props): React.ReactElement {
  const styles = clsx(className, style.Button, type && style[`Button--${type}`]);

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
