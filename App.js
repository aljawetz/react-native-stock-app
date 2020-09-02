import * as React from 'react';
import * as firebase from 'firebase';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);

import LoadingScreen from './src/screens/LoadingScreen';
import AuthNavigator from './src/navigators/AuthNavigator';
import AppNavigator from './src/navigators/AppNavigator';

const Stack = createStackNavigator();

export default function App() {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'LoadingScreen'} headerMode='none'>
          <Stack.Screen name='LoadingScreen' component={LoadingScreen} />
          <Stack.Screen name='AuthNavigator' component={AuthNavigator} options={{ gestureEnabled: false }} />
          <Stack.Screen name='AppNavigator' component={AppNavigator} options={{ gestureEnabled: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}