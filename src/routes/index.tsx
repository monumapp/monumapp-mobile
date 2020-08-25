import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Search from '../pages/Search';
import Scanner from '../pages/Scanner';
import Monument from '../pages/Monument';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Search" component={Search} />
    <Screen name="Scanner" component={Scanner} />
    <Screen name="Monument" component={Monument} />
  </Navigator>
);

export default Routes;
