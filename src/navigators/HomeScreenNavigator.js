import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import AddPostScreen from '../screens/AddPostScreen';

const Stack = createStackNavigator();

export default function HomeScreenNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerTintColor: "red",
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        name="AddPostScreen"
        component={AddPostScreen}
      />
    </Stack.Navigator>
  );
}