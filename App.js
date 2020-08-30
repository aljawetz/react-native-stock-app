import * as React from 'react';
import * as firebase from 'firebase';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);

import LoadingScreen from './src/screens/LoadingScreen';
import LoginNavigator from './src/navigators/LoginNavigator';
import HomeTabNavigator from './src/navigators/HomeTabNavigator';

const Stack = createStackNavigator();

export default function App() {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'LoadingScreen'} headerMode='none'>
          <Stack.Screen name='LoadingScreen' component={LoadingScreen} />
          <Stack.Screen name='LoginNavigator' component={LoginNavigator} options={{ gestureEnabled: false }} />
          <Stack.Screen name='HomeTabNavigator' component={HomeTabNavigator} options={{ gestureEnabled: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}