import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { colors } from '../../../Styles';

export default function HighStockCard({ high, low }) {

  return (
    <View style={styles.stockInfoContainer}>
      <StockCard data={high} />
      <StockCard data={low} />
    </View>
  );
}

const StockCard = ({ data }) => (
  <TouchableOpacity style={styles.cardContainer}>
    <Text style={styles.title}>{data.symbol}</Text>
    <View style={styles.textContainer}>
      <Text>R${data.price}</Text>
      <Text style={{ color: data.change_percent > 0 ? 'green' : 'red' }}>{data.change_percent}%</Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  stockInfoContainer: {
    marginTop: 7,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-evenly",
  },
  container: {
    backgroundColor: colors.background,
    marginBottom: 5,
  },
  cardContainer: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: "space-evenly",
    width: Dimensions.get('window').width / 2 - 11,
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