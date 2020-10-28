import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors, SCREEN_WIDTH } from '../../../Styles';

export default function Card({ props }) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name.split(" ")[0]}</Text>
      <Text style={styles.text}>{props.points}</Text>
      <Text style={[styles.text, { color: props.variation > 0 ? 'green' : 'red' }]}>{props.variation}%</Text>
    </View>
  );
}

const numberGrid = 3;
const itemWidth = SCREEN_WIDTH / numberGrid;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 20,
  },
  text: {
    width: itemWidth,
  },
})