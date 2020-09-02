import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, headerHeight } from '../Styles';

export default function Header({ title, currentScreen, icon, navigateTo, navigation, backIcon }) {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  /*
  return (
    <SafeAreaView style={styles.container}>
      {backIcon ? (
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
          <Ionicons name='ios-arrow-back' size={24} />
        </TouchableOpacity>
      ) : (
          <View style={styles.iconContainer}></View>
        )}

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      {icon ? (
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate(navigateTo)}>
          <Ionicons name={icon} size={24} />
        </TouchableOpacity>
      ) : (
          <View style={styles.placeholderContainer}></View>
        )}

    </SafeAreaView>
  );
  */
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: headerHeight,
    elevation: 4,
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.header,
  },
  title: {
    fontSize: 18,
  }
});
