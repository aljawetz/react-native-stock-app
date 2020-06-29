import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default function Post() {
  return (
    <View style={styles.postContainer}>
      <Text>@arthur</Text>
      <Text>Minha publicação</Text>
      <Image source={require('../../assets/icon.png')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
  },
  image: {
    marginTop: 50,
    width: 200,
    height: 200,
  }
});