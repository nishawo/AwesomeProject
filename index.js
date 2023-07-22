/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {SafeAreaView} from 'react-native';
import React from 'react';

const AppWarpper = () => {
  return <App />;
};
AppRegistry.registerComponent(appName, () => AppWarpper);
