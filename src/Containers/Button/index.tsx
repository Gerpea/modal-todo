import React from 'react';
import clsx from 'clsx';

import style from './styles.module.css';

export interface Props {
  type: 'success' | 'danger';
  children: React.ReactNode;
}

function Button({ type, children }: Props): React.ReactElement {
  const styles = clsx(style.Button, style[`Button--${type}`]);

  return <button className={styles}>{children}</button>;
}

export default Button;
