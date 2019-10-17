import App from 'components/App';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import store, {persistor} from 'store';

ReactDOM.render((
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
    </PersistGate>
  </Provider>),
  document.getElementById('root'));
