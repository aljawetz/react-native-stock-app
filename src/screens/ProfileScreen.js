import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { Avatar } from 'react-native-paper';
import { AuthContext } from '../../App';
import firebase, { database } from 'firebase';


const userImage = require('../../assets/profile.jpg');
const backgroundImage = require('../../assets/background.jpg');
const userName = '@arthur';

export default function Profile() {
  const { signOut } = React.useContext(AuthContext);


  database()
    .ref('/users/123')
    .once('value')
    .then(snapshot => {
      console.log('User data: ', snapshot.val());
    });

  return (
    <View style={styles.container}>
      <Image
        source={backgroundImage}
        style={styles.backgroundImage}
      />
      <Avatar.Image source={userImage} />

      <Text style={styles.userName}>{userName}</Text>
      <Button title="Sign out" onPress={signOut} />
      <Button title="Sign out" onPress={() => firebase.auth().signOut()} />
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
