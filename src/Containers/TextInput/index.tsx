import React from 'react';
import clsx from 'clsx';

import style from './styles.module.scss';

export interface Props {
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  error?: string;
}

function TextInput({ error, value, placeholder, className, onChange }: Props): React.ReactElement {
  const styles = clsx(className, style.Input, error && style.Error);

  return <input value={value} className={styles} onChange={onChange} placeholder={placeholder} />;
}

export default TextInput;
