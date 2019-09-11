import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
