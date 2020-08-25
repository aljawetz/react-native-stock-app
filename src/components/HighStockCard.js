import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

export default function HighStockCard({ data }) {

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{data.symbol}</Text>
      <View style={styles.texContainer}>
        <Text>R${data.price}</Text>
        <Text style={{ color: data.change_percent > 0 ? 'green' : 'red' }}>{data.change_percent}%</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: "space-evenly",
    width: Dimensions.get('window').width / 2 - 15,
    paddingVertical: 15,
    borderRadius: 5,
  },
  title: {
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  textContainer: {
    flexDirection: 'column',
  },
})