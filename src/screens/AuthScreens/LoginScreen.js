import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';

import Input from './components/Input';
import { Ionicons } from '@expo/vector-icons';

import signInWithGoogleAsync from './services/GoogleAuth';
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

  function handleGoogleLogin() {
    if (signInWithGoogleAsync) {
      navigation.navigate('MainNavigator');
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

        <Input
          title='Email:'
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <Input
          title='Password:'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <TouchableOpacity onPress={handleGoogleLogin}>
            <Ionicons name="logo-google" size={40} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleGoogleLogin}>
            <Ionicons name="logo-facebook" size={40} />
          </TouchableOpacity>
        </View>

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

  logoContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'space-around',
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