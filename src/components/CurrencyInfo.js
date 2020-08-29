import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../Styles';

export default function CurrencyInfo({ data, symbol }) {

  const renderItem = (title, info) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text>{info}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BRL to {symbol}</Text>
      {renderItem("Open ", data["1. open"])}
      {renderItem("High ", data["2. high"])}
      {renderItem("Low ", data["3. low"])}
      {renderItem("Close ", data["4. close"])}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 10,
    height: 200,
    alignItems: 'center',
    paddingTop: 24,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    color: colors.button,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
  },
  itemTitle: {
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 16,
  },
})