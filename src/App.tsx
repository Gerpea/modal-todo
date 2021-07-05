import React from 'react';

import EditSynonymGroupModal from 'Components/EditSynonymGroupModal';

function App(): React.ReactElement {
  return (
    <div>
      <EditSynonymGroupModal
        isOpen={true}
        onClose={() => {
          console.log('close modal');
        }}
      />
    </div>
  );
}

export default App;
