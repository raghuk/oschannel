import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import { multiClientMiddleware } from 'redux-axios-middleware';

import rootReducer from './reducers';
import resetStore from './resetStore';
import { APP_RESET } from '../modules/app/store/actionTypes';

const persistConfig = { key: 'root', storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);


export default function configureStore(clients) {
  const store = createStore(
    persistedReducer,
    compose(
      applyMiddleware(thunk, multiClientMiddleware(clients)),
      resetStore(APP_RESET)
    )
  );

  const persistor = persistStore(store);

  return { store, persistor };
}
