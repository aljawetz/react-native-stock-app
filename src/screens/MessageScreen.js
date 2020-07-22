import React from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../Styles';
import Header from '../components/Header';

export default function MessageScreen({ navigation }) {
  return (
    <>
      <Header
        title='Messages'
        currentScreen='MessageScreen'
        navigation={navigation}
        backIcon
      />
      <SafeAreaView style={{ flex: 1 }}>

        <ScrollView style={styles.container}>
          <Text>Messages Screen</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 24,
  }
});