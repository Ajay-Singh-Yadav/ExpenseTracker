import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { ThemeProvider } from './src/context/ThemeContext';

import AppNavigation from './src/navigator/AppNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import ApolloClientProvider from './src/Graphql/ApolloClientProvider';

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle={'dark-content'}
      />

      <Provider store={store}>
        <ApolloClientProvider>
          <ThemeProvider>
            <AppNavigation />
          </ThemeProvider>
        </ApolloClientProvider>
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
