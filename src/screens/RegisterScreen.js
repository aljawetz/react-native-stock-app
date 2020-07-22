import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Styles } from '../Styles';
import Input from '../components/Input'
import * as firebase from 'firebase';

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior={"padding"} style={styles.container}>

        <Text style={styles.title}>Hi! Register to get started</Text>
        <View style={styles.errorMessageContainer}>
          {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
        </View>

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

        <TouchableOpacity style={styles.buttonContainer} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  title: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },

  errorMessageContainer: {
    marginTop: 10,
  },
  errorMessage: {
    textAlign: 'center',
    color: 'red',
    fontSize: 10,
  },

  inputContainer: {
    marginTop: 30,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase',
  },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161F3D',
  },

  buttonContainer: {
    marginTop: 30,
    marginHorizontal: 30,
    backgroundColor: '#E9446A',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '500',
  },
})