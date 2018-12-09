import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import axios from 'axios';

import configureStore from './redux';
import Setup from './setup';

// all axios can be used, shown in axios documentation
const clients = {
  default: {
    client: axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      responseType: 'json'
    })
  },
  getContent: {
    client: axios.create({
      baseURL: 'http://www.apps.omshantitv.org/wp-json/posts',
      responseType: 'json'
    })
  }
};

const { store, persistor } = configureStore(clients);

const Main = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Setup />
    </PersistGate>
  </Provider>
);

export default Main;
