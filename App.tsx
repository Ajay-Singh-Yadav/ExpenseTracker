import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { ThemeProvider } from './src/context/ThemeContext';

import AppNavigation from './src/navigator/AppNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <Provider store={store}>
        <ThemeProvider>
          <AppNavigation />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
