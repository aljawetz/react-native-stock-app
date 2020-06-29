import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';
import { AppStyles } from '../AppStyles';
import firebase from 'firebase';

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleRegister() {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(userCredentials => {
      return userCredentials.user.updateProfile({
        displayName: username
      });
    })
      .catch(error => setError(error));
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.leftTitle]}>Create new account</Text>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="username"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="email"
          value={email}
          onChangeText={email}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
          secureTextEntry
        />
      </View>
      <Button
        style={styles.button}
        mode="contained"
        onPress={handleRegister}>
        Sign Up
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: "blue",
    marginTop: 20,
    marginBottom: 20,
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: 20,
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  },
  button: {
    margin: 5,
    backgroundColor: "blue",
    elevation: 8,
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12
  }
});
