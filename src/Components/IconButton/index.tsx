import React from 'react';
import clsx from 'clsx';

import Button, { Props as ButtonProps } from 'Containers/Button';
import Icon, { Props as IconProps } from 'Components/Icon';

import style from './styles.module.css';

function IconButton({
  color,
  onClick,
  className,
  children,
}: IconProps & ButtonProps): React.ReactElement {
  const styles = clsx(className, style.IconButton);

  return (
    <Button className={styles} onClick={onClick}>
      <Icon color={color}>{children}</Icon>
    </Button>
  );
}

export default IconButton;
