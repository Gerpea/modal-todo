import React from 'react';

import Modal from 'Containers/Modal';

import Footer from './Footer';
import Content from './Content';

import style from './styles.module.scss';

export interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function EditSynonymGroupModal({ isOpen, onClose }: Props): React.ReactElement {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        title="Редактирование группы синонимов поисковых фраз"
        onClose={onClose}
        footer={<Footer />}
        className={style.Modal}
      >
        <Content />
      </Modal>
    </div>
  );
}

export default EditSynonymGroupModal;
