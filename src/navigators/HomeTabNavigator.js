import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreenNavigator from './HomeScreenNavigator';
import CurrenciesNavigator from './CurrenciesNavigator';
import SearchScreen from '../screens/SearchScreen';

import ProfileScreenNavigator from './ProfileScreenNavigator';

const Tab = createBottomTabNavigator();

export default function HomeTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'black',
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="HomeScreenNavigator"
        component={HomeScreenNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-search' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CurrenciesNavigator"
        component={CurrenciesNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-cash' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreenNavigator"
        component={ProfileScreenNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-person' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}