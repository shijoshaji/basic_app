import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BookApp from './Books';

ReactDOM.render(
  <React.StrictMode>
    {/* NOTE: Basic setup to learn App */}
    {/* <App /> */}
    {/* NOTE: Refactored code of App */}
    <BookApp />
  </React.StrictMode>,
  document.getElementById('root')
);
