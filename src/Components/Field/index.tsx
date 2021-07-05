import React, { useMemo } from 'react';
import clsx from 'clsx';

import Icon, { Icons } from 'Components/Icon';

import style from './styles.module.scss';
import { ReactElement } from 'react';

export interface Props {
  className?: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, error, className, children }: Props): React.ReactElement {
  const styles = clsx(className, style.Field);

  const childWithError = useMemo(
    () => React.cloneElement(children as ReactElement, { error }),
    [children, error],
  );

  return (
    <div className={styles}>
      <span className={style.Label}>{label}</span>
      {childWithError}
      {error && (
        <span className={style.Error}>
          <Icon color="red">{Icons.danger}</Icon>
          {error}
        </span>
      )}
    </div>
  );
}

export default Field;
