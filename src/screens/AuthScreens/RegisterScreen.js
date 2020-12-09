import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';

import Input from './components/Input'
import Button from './components/Button';
import { SCREEN_WIDTH, colors } from '../../Styles';
import * as firebase from 'firebase';

const image_src = '../../../assets/people-working.jpg'

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  function handleRegister() {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(userCredentials => {
      return userCredentials.user.updateProfile({
        displayName: name
      });
    })
      .catch(error => setErrorMessage(error.message));
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView behavior={'padding'} style={styles.container}>

        <Text style={styles.title}>Hi! Register to get started</Text>

        <Input
          title='Email:'
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          autoCapitalize='none'
        />

        <Input
          title='Name:'
          value={name}
          onChangeText={setName}
        />

        <Input
          title='Password:'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {errorMessage && <Text style={styles.errorMessageText}>{errorMessage}</Text>}
        <Button title="Register" onPress={handleRegister} />

        <Image style={styles.image} source={require(image_src)} />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.loginBackground,
    flex: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 25,
  },
  errorMessageText: {
    textAlign: 'center',
    color: colors.errorMessage,
    fontSize: 12,
    marginTop: 20,
  },
  image: {
    marginTop: 30,
    resizeMode: 'contain',
    width: SCREEN_WIDTH,
    height: 250,
  },
})