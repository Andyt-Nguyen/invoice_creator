import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.scss';

import App from './App';
import InvoiceProvider from 'providers/invoice/invoice.provider';

ReactDOM.render(
  <React.StrictMode>
    <InvoiceProvider>
      <App />
    </InvoiceProvider>
  </React.StrictMode>,
  document.getElementById('root')
);