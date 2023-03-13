import React from 'react';
import App from './components/App';

import './index.css';
import { createRoot } from 'react-dom/client';
import {store} from './redux/store'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(

  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

);
