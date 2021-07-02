import React from 'react';
import ReactModal from 'react-modal';

export interface Props {
  isOpen: boolean;
}

function Modal({ isOpen }: Props): React.ReactElement {
  return <ReactModal isOpen={isOpen} />;
}

export default Modal;
