import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

import App from './App';

import './index.css';

ReactModal.setAppElement('#root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
