import React from 'react';
import clsx from 'clsx';

import style from './styles.module.scss';

export interface Props {
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
}

function Input({ className, value, placeholder, onChange }: Props): React.ReactElement {
  const styles = clsx(className, style.Input);

  return <input value={value} className={styles} onChange={onChange} placeholder={placeholder} />;
}

export default Input;
