import {createStore} from 'redux';
import rootReducer from 'modules';

export default createStore(
  rootReducer,
  // the following line allows Redux dev tools to view the store. This would
  // normally be done inside of a dev configuration
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);