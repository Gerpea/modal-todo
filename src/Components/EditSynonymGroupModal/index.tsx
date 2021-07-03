import React from 'react';

import Modal from 'Containers/Modal';
import Icon from 'Components/Icon';

import Footer from './Footer';

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
      >
        <Icon color="red">danger</Icon>
      </Modal>
    </div>
  );
}

export default EditSynonymGroupModal;
