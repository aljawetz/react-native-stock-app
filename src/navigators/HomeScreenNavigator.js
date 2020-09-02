import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import StockChartScreen from '../screens/StocksScreens/StockChartScreen';

const Stack = createStackNavigator();

export default function HomeScreenNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      headerMode='none'
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        name="StockChartScreen"
        component={StockChartScreen}
        initialParams={{ symbol: 'IBM' }}
      />
    </Stack.Navigator>
  );
}