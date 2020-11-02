import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
// import Search from '../pages/Search';
import Scanner from '../pages/Scanner';
import Monument from '../pages/Monument';
import MonumentsList from '../pages/MonumentsList';
import Questions from '../pages/Questions';

import NotFound from '../ExceptionHandler/Pages/NotFound';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Scanner" component={Scanner} />
    <Screen name="Questions" component={Questions} />
    <Screen name="MonumentsList" component={MonumentsList} />
    {/* <Screen name="Search" component={Search} /> */}
    <Screen name="Monument" component={Monument} />
    <Screen name="NotFound" component={NotFound} />
  </Navigator>
);

export default Routes;
