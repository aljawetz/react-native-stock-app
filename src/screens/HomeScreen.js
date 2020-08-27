import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView, View, ActivityIndicator } from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';
import HighStockCard from '../components/HighStockCard';

import getHigh from '../services/getHigh';

import { colors } from '../Styles';

export default function Home({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [high, setHigh] = useState({});
  const [low, setLow] = useState({});

  async function getHighStock() {
    try {
      let [highInfo, lowInfo] = await getHigh();
      setHigh(highInfo);
      setLow(lowInfo);
      setIsLoading(false);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getHighStock();
  }, []);

  return (
    <>
      <Header
        title='stock-app'
        currentScreen='HomeScreenNavigator'
        navigation={navigation}
      />
      {isLoading ? (
        <ActivityIndicator style={{ flex: 1, alignContent: 'center' }} />
      ) : (
          <SafeAreaView style={styles.container}>
            <View style={styles.stockInfoContainer}>
              <HighStockCard style={styles.stockInfoItem} data={high} />
              <HighStockCard style={styles.stockInfoItem} data={low} />
            </View>
          </SafeAreaView>
        )
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 20,
  },
  stockInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 7.5,
  },
  stockInfoItem: {
    backgroundColor: 'blue',
  },
});