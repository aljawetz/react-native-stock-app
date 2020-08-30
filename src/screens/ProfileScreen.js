import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, SafeAreaView } from 'react-native';
import { colors } from '../Styles';
import { Avatar } from 'react-native-paper';
import Header from '../components/Header';

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
    <>
      <Header
        title='Profile'
        currentScreen='ProfileScreen'
        navigation={navigation}
      />
      <SafeAreaView style={{ flex: 1 }}>

        <ScrollView style={styles.container}>
          <Avatar.Image source={photoURL || userImage} style={styles.avatar} />
          <Text style={styles.userName}>Hello, {displayName}</Text>
          <Text style={styles.userName}>{email}</Text>
          <Button title="Sign out" onPress={handleSignOut} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 24,
  },
  avatar: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  userImage: {
    width: 200,
    height: 200,
  },
  userName: {
    margin: 24,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});