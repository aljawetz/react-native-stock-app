import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { ActivityIndicator } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <ActivityIndicator style={styles.spinner} size="large" color="black" />
    );
  } else {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/developer.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Artistfy</Text>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate('Login')}>
          LOGIN
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate('Signup')}>
          REGISTER
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  image: {
    height: 250,
    width: 250,
  },
  button: {
    margin: 5,
    marginHorizontal: 75,
    backgroundColor: "blue",
    elevation: 8,
    borderRadius: 50,
    paddingVertical: 10,
  },
  spinner: {
    marginTop: 200,
  },
});
