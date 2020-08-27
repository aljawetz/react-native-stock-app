import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StockInfo({ data }) {

  //{ data.map((prop, idx) => <Text key={idx}>{prop}</Text>) }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.Name}</Text>
      <Text>Exchange: {data.Exchange}</Text>
      <Text>{data.ProfitMargin}</Text>
      <Text>{data.DividendPerShare}</Text>
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
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
})