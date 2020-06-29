import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { Avatar } from 'react-native-paper';

import firebase from 'firebase';

const userImage = require('../../assets/profile.jpg');

export default function Profile({ navigation }) {
  const [displayName, setDisplayName] = useState('');;
  const [email, setEmail] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  useEffect(() => {
    const { displayName, email, photoURL } = firebase.auth().currentUser;

    setDisplayName(displayName);
    setEmail(email);
    setPhotoURL(photoURL);
  }, []);

  function handleSignOut() {
    firebase.auth().signOut();
    navigation.navigate('LoginNavigator');
  }

  return (
    <View style={styles.container}>

      <Avatar.Image source={photoURL || userImage} />
      <Text style={styles.userName}>Hello, {displayName}</Text>
      <Text style={styles.userName}>{email}</Text>
      <Button title="Sign out" onPress={handleSignOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  backgroundImage: {
    width: 100,
    height: 100,
  },
  userImage: {
    width: 200,
    height: 200,
  },
  userName: {
    margin: 24,
    marginTop: 0,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
