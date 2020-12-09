import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/AuthScreens/LoginScreen'
import RegisterScreen from "../screens/AuthScreens/RegisterScreen";

const Stack = createStackNavigator();

export default function AuthNavigator() {

  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerTitle: '',
          headerBackTitle: 'Login',
        }}
      />
    </Stack.Navigator>
  );
}