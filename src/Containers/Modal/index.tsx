import React from 'react';
import ReactModal from 'react-modal';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';

import style from './styles.module.css';
export interface Props {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

function Modal({ isOpen, title, onClose, footer, children }: Props): React.ReactElement {
  return (
    <ReactModal isOpen={isOpen} className={style.Modal} onRequestClose={onClose}>
      <Header>{title}</Header>
      <Content>{children}</Content>
      {footer && <Footer>{footer}</Footer>}
    </ReactModal>
  );
}

export default Modal;
