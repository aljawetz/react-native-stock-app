import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, SCREEN_WIDTH, headerHeight } from '../Styles';

export default function Header({ title, icon, navigateTo, navigation, backIcon }) {

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
}

const numberGrid = 5;
const itemWidth = SCREEN_WIDTH / numberGrid;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: headerHeight,
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