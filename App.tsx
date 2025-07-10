import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { ThemeProvider } from './src/context/ThemeContext';

import AppNavigation from './src/navigator/AppNavigation';

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />
      <ThemeProvider>
        <AppNavigation />
      </ThemeProvider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
