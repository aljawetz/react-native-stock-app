import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import firebase from 'firebase';

import { Styles } from '../Styles';

export default function LoadingScreen({ navigation }) {

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      navigation.navigate(user ? 'MainNavigator' : 'LoginNavigator');
    })
  }, []);

  return (
    <View style={Styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}

