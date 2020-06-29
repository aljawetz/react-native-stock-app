import React from 'react';
import { ScrollView, StyleSheet, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
import Post from '../components/Post';

export default function Home({ navigation }) {

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Post />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('AddPostScreen')}>
        Add post
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});