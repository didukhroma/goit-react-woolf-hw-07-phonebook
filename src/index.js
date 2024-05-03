//IMPORT
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
//COMPONENTS
import App from 'components/App';
//STORE
import { store } from './redux/store';

//STYLES
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
