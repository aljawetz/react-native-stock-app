import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default function NotificationsScreen({ navigation }) {
  return (
    <>
      <Header
        title='Settings'
        currentScreen='SettingsScreen'
        navigation={navigation}
        backIcon
      />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text>Settings Screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});