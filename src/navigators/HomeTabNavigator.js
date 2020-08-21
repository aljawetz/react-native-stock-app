import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreenNavigator from './HomeScreenNavigator';

import CurrenciesScreen from '../screens/CurrenciesScreen';
import StocksScreen from '../screens/StocksScreen';
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
        name="CurrenciesScreen"
        component={CurrenciesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-notifications' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="StocksScreen"
        component={StocksScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-notifications' color={color} size={size} />
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