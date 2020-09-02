import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../../Styles';

const renderItem = (title, info) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemTitle}>{title}</Text>
    <Text>{info}</Text>
  </View>
);

export default function CompanyOverview({ data }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.Name}</Text>

      {renderItem("Exchange ", data.Exchange)}
      {renderItem("Industry ", data.Industry)}
      {renderItem("Profit margin ", data.ProfitMargin)}
      {renderItem("Dividend per share ", data.DividendPerShare)}
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
    fontSize: 24,
    color: colors.blue,
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