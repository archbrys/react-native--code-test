/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

// Imports: Redux Persist Persister
import { store, persistor } from './app/store/store';

// Components
import Root from './app/screens/Root'
const App = () => {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Root />
        </PersistGate>
    </Provider>
  );
};

export default App;
