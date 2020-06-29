import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-paper';
import { AppStyles } from '../AppStyles';

import { AuthContext } from '../../App'
import signInWithGoogleAsync from '../services/GoogleAuth';
import firebase from 'firebase';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState(false);
  const { signIn } = React.useContext(AuthContext);

  function onLoginWithEmail() {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(error => setErrorMessage(error))
  }


  function onLoginWithGoogle() {
    if (signInWithGoogleAsync) {
      signIn({ username, password });
    } else
      navigation.navigate('Signup');
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.leftTitle]}>Login</Text>
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
          secureTextEntry
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      {errorMessage && <Text style={{ color: "red" }}>{errorMessage}</Text>}
      <Button
        style={styles.button}
        mode="contained"
        onPress={onLoginWithEmail}>
        Log in
      </Button>
      <Text>OR</Text>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => signIn({ username, password })}>
        Login with Facebook
      </Button>
      <Button
        style={styles.button}
        mode="contained"
        onPress={onLoginWithGoogle}>
        Login with Google
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
    color: AppStyles.color.tint,
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
  },
});
