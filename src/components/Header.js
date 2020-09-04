import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, SCREEN_WIDTH } from '../Styles';

export default function Header({ title, currentScreen, icon, navigateTo, navigation, backIcon }) {

  return (
    <SafeAreaView style={styles.container}>
      {backIcon ? (
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
          <Ionicons name='ios-arrow-back' size={24} />
        </TouchableOpacity>
      ) : (
          <View style={styles.iconContainer}></View>
        )}

      <TouchableOpacity style={styles.titleContainer} onPress={() => navigation.navigate(currentScreen)}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>

      {icon ? (
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate(navigateTo)}>
          <Ionicons name={icon} size={24} />
        </TouchableOpacity>
      ) : (
          <View style={styles.placeholderContainer}></View>
        )}

    </SafeAreaView>
  );
}

const numberGrid = 5;
const itemWidth = SCREEN_WIDTH / numberGrid;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: colors.header,
  },
  iconContainer: {
    width: itemWidth,
    alignItems: 'center',
  },
  titleContainer: {
    width: itemWidth * 3,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  }
});