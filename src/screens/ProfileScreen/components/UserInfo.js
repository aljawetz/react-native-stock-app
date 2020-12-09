import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import firebase from 'firebase';

import { colors } from '../../../Styles';

const userImage = require('../../../../assets/profile.jpg');

export default function UserInfo({navigation}) {
  const [displayName, setDisplayName] = useState('');
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
    navigation.navigate('AuthNavigator');
  }

  return (
    <View style={styles.container}>
      <Image source={userImage} style={styles.avatar} />
      <Text style={styles.userName}>{displayName}</Text>
      <Text style={styles.userName}>{email}</Text>
      <Button title="Sign out" onPress={handleSignOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    backgroundColor: colors.blue,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 50,
  },
  favoriteStocksContainer: {
    marginTop: 5,
  },
  avatar: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    width: 200,
    height: 200,
  },
  userName: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});