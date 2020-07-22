import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreenNavigator from './HomeScreenNavigator';

import AddPostScreen from '../screens/AddPostScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
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
        name="NotificationsScreen"
        component={NotificationsScreen}
        initialParams={{ symbol: 'IBM' }}
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
/*
<Tab.Screen
        name="AddPostScreen"
        component={AddPostScreen}
        screenOptions={{ title: 'Add Post' }}
        options={{
          tabBarIcon: () => (
            <Ionicons name='ios-add-circle' color='#e91e63' size={48} />
          ),
        }}
      />
*/