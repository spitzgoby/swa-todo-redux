import {applyMiddleware, compose, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import rootReducer from 'modules';
import storage from 'redux-persist/lib/storage/session';
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'todos',
  storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  // the following line allows Redux dev tools to view the store. This would
  // normally be done inside of a dev configuration
  compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
export const persistor = persistStore(store);
