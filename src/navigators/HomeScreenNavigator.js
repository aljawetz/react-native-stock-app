import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ChartScreen from '../screens/ChartScreen';

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
        name="ChartScreen"
        component={ChartScreen}
        initialParams={{ symbol: 'IBM' }}
      />
    </Stack.Navigator>
  );
}