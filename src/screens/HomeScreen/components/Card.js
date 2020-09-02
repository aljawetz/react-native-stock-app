import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Avatar } from 'react-native-paper';

const userImage = require('../../../../assets/developer.png');
export default function Card({ props, navigation }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator style={{ flex: 1, alignContent: 'center' }} />
      ) : (
          <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('StockChartScreen', { symbol: props.symbol })}
          >
            <Avatar.Image source={userImage} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{props.name}</Text>
              <Text style={styles.price}>{props.location}</Text>
              <Text style={styles.price}>{props.points}</Text>
              <Text style={{ color: props.variation > 0 ? 'green' : 'red' }}>{props.variation}%</Text>
            </View>
          </TouchableOpacity>
        )
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginBottom: 7,
    marginHorizontal: 7,
    padding: 10,
    borderRadius: 5,
  },
  avatar: {
    backgroundColor: 'black',
  },
  textContainer: {
    marginLeft: 20,
  },
  title: {
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
})