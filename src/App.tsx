import React from 'react';
import Modal from './containers/Modal';

function App(): React.ReactElement {
  return (
    <div>
      <Modal isOpen={true} />
    </div>
  );
}

export default App;
