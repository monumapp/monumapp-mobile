import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Search from './pages/Search';

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <SafeAreaView style={{ flex: 1 }}>
        <Search />
      </SafeAreaView>
    </>
  );
};

export default App;
