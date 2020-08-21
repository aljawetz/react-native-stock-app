import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import StocksScreen from '../screens/StocksScreen';
import ChartScreen from '../screens/ChartScreen';

const Stack = createStackNavigator();

export default function StocksNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="StocksScreen"
      headerMode='none'
    >
      <Stack.Screen
        name="StocksScreen"
        component={StocksScreen}
      />
      <Stack.Screen
        name="ChartScreen"
        component={ChartScreen}
        initialParams={{ symbol: 'IBM' }}
      />
    </Stack.Navigator>
  );
}