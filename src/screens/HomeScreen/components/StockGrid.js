import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Card from './Card';

import { colors, SCREEN_WIDTH } from '../../../Styles';

export default function StockGrid({ data }) {

  const renderItem = ({ name, points, variation }) => {
    return (
      <>
        <Text style={styles.item}>{name.split(' ')[0]}</Text>
        <Text style={styles.item}>{points}</Text>
        <Text style={[styles.item, { color: variation > 0 ? 'green' : 'red' }]}>{variation}</Text>
      </>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.titlesContainer}>
        <Text style={styles.title}>Stocks</Text>
        <Text style={styles.title}>Points</Text>
        <Text style={styles.title}>Variation</Text>
      </View>
      {data.map((stock, idx) =>
        <View style={styles.itemContainer} key={idx}>
          {renderItem({ ...stock })}
        </View>
      )}
    </View>
  );
}

const numberGrids = 3;
const itemWidth = (SCREEN_WIDTH / numberGrids) - 11;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 7,
    padding: 10,
    borderRadius: 5,
  },
  titlesContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  title: {
    width: itemWidth,
    paddingLeft: 25,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  item: {
    width: itemWidth,
    paddingLeft: 25,
  }
})