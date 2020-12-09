import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';

import Input from './components/Input';
import Button from './components/Button';
import { Ionicons } from '@expo/vector-icons';
import { SCREEN_WIDTH, colors } from '../../Styles';

import signInWithGoogleAsync from './services/GoogleAuth';
import * as firebase from 'firebase';

const image_src = '../../../assets/mobile.jpg';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);

  function handleLogin() {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(error => setErrorMessage(error.message));
  }

  function handleRegister() {
    navigation.navigate('RegisterScreen');
  }

  function handleGoogleLogin() {
    if (signInWithGoogleAsync) {
      navigation.navigate('AppNavigator');
    } else
      navigation.navigate('RegisterScreen');
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
        <Text style={styles.title}>Welcome to Stock App</Text>
        <Image style={styles.image} source={require(image_src)} />

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
        {errorMessage && <Text style={styles.errorMessageText}>{errorMessage}</Text>}
        <Button title="Login" onPress={handleLogin} />

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
    backgroundColor: colors.loginBackground,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    width: SCREEN_WIDTH,
    height: 180,
    marginTop: 80,
    marginBottom: 20,
  },
  errorMessageText: {
    textAlign: 'center',
    color: colors.errorMessage,
    marginTop: 7.5,
    fontSize: 12,
  },

  logoContainer: {
    flexDirection: "row",
    marginTop: 20,
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
    color: colors.blue,
  },
})