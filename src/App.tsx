import React from 'react';
import {Text, View} from 'react-native';
import InputForm from './components/InputForm';
import Home from './components/Home';

import {store} from './store/index';
import { Provider } from 'react-redux';
const HelloWorldApp = () => {
  return (
    <Provider store={store}>
      <InputForm/>
      <Home/>
    </Provider>
  );
};

export default HelloWorldApp;
