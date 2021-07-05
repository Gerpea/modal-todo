import React from 'react';
import ReactModal from 'react-modal';
import clsx from 'clsx';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';

import style from './styles.module.scss';
export interface Props {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  footer?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

function Modal({ isOpen, title, onClose, footer, className, children }: Props): React.ReactElement {
  const styles = clsx(className, style.Modal);

  return (
    <ReactModal isOpen={isOpen} className={styles} onRequestClose={onClose}>
      <Header onClose={onClose}>{title}</Header>
      <Content>{children}</Content>
      {footer && <Footer>{footer}</Footer>}
    </ReactModal>
  );
}

export default Modal;
