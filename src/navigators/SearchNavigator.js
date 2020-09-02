import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from '../screens/StocksScreens/SearchScreen';
import StockChartScreen from '../screens/StocksScreens/StockChartScreen';

const Stack = createStackNavigator();

export default function SearchNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="SearchScreen"
      headerMode='none'
    >
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
      />
      <Stack.Screen
        name="StockChartScreen"
        component={StockChartScreen}
        initialParams={{ symbol: 'IBM' }}
      />
    </Stack.Navigator>
  );
}