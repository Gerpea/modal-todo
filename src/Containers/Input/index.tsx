import React from 'react';
import clsx from 'clsx';

import style from './styles.module.scss';

export interface Props {
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ className, onChange }: Props): React.ReactElement {
  const styles = clsx(className, style.Input);

  return <input className={styles} onChange={onChange} placeholder="Введите что нибудь" />;
}

export default Input;
