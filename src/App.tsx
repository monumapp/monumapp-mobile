import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import SplashScreen from "react-native-splash-screen";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <Routes />
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
};

export default App;
