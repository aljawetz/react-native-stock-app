import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Styles } from '../Styles';

import signInWithGoogleAsync from '../services/GoogleAuth';
import * as firebase from 'firebase';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  function handleLogin() {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(error => setErrorMessage(error.message));
  }

  function handleRegister() {
    navigation.navigate('RegisterScreen');
  }

  function onLoginWithGoogle() {
    if (signInWithGoogleAsync) {
      navigation.navigate('HomeNavigator');
    } else
      navigation.navigate('RegisterScreen');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView behavior={"padding"} style={styles.container}>

        <Text style={styles.title}>Welcome to the App</Text>

        <View style={styles.errorMessageContainer}>
          {errorMessage && <Text style={styles.errorMessageText}>{errorMessage}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Email:</Text>
          <TextInput
            keyboardType='email-address'
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Password:</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerContainer} onPress={handleRegister}>
          <Text style={styles.registerText}>
            New to the App? <Text style={styles.registerHighlight}>Register</Text>
          </Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },

  errorMessageContainer: {
    marginHorizontal: 20,
    marginTop: 30,
  },

  errorMessageText: {
    textAlign: 'center',
    color: 'red',
    fontSize: 12,
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

  registerContainer: {
    alignSelf: 'center',
    marginTop: 32,
  },
  registerText: {
    color: '#414959',
    fontSize: 13,
  },
  registerHighlight: {
    fontWeight: '500',
    color: '#E9446A',
  },
})