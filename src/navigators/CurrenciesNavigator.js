import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CurrenciesScreen from '../screens/CurrenciesScreen';
import CurrencyChartScreen from '../screens/CurrencyChartScreen';

const Stack = createStackNavigator();

export default function CurrenciesNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="CurrenciesScreen"
      headerMode='none'
    >
      <Stack.Screen
        name="CurrenciesScreen"
        component={CurrenciesScreen}
      />
      <Stack.Screen
        name="CurrencyChartScreen"
        component={CurrencyChartScreen}
        initialParams={{ symbol: 'IBM' }}
      />
    </Stack.Navigator>
  );
}