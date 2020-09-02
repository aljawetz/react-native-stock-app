import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../Styles';

import HomeScreenNavigator from './HomeScreenNavigator';
import CurrenciesNavigator from './CurrenciesNavigator';
import SearchNavigator from './SearchNavigator';

import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.button,
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
        name="SearchNavigator"
        component={SearchNavigator}
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
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-person' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}