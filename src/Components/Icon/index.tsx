import React from 'react';
import clsx from 'clsx';

import DangerIcon from 'Icons/DangerIcon';
import InfoIcon from 'Icons/InfoIcon';
import PencilIcon from 'Icons/PencilIcon';
import TrashIcon from 'Icons/TrashIcon';
import CloseIcon from 'Icons/CloseIcon';

import style from './styles.module.scss';

export enum Icons {
  danger,
  info,
  pencil,
  trash,
  close,
}

const icons: {
  [name: number]: React.FunctionComponent<React.HTMLAttributes<HTMLOrSVGElement>>;
} = {
  [Icons.danger]: DangerIcon,
  [Icons.info]: InfoIcon,
  [Icons.pencil]: PencilIcon,
  [Icons.trash]: TrashIcon,
  [Icons.close]: CloseIcon,
};

export interface Props {
  children: Icons;
  color: 'blue' | 'red' | 'gray-3';
}

function Icon({ color, children: name }: Props): React.ReactElement {
  const IconComponent = icons[name];
  const styles = clsx(style.Icon, style[`Icon--${color}`]);

  return <IconComponent className={styles} />;
}

export default Icon;
