import React from 'react';
import clsx from 'clsx';

import DangerIcon from 'Icons/DangerIcon';
import InfoIcon from 'Icons/InfoIcon';
import PencilIcon from 'Icons/PencilIcon';
import TrashIcon from 'Icons/TrashIcon';

import style from './styles.module.css';

const icons: { [name: string]: React.FunctionComponent<React.HTMLAttributes<HTMLOrSVGElement>> } = {
  danger: DangerIcon,
  info: InfoIcon,
  pencil: PencilIcon,
  trash: TrashIcon,
};

export interface Props {
  children: string;
  color: 'blue' | 'red' | 'gray-3';
}

function Icon({ color, children: name }: Props): React.ReactElement {
  const IconComponent = icons[name];
  const styles = clsx(style.Icon, style[`Icon--${color}`]);

  return <IconComponent className={styles} />;
}

export default Icon;
