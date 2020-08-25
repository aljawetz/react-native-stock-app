import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView, View, ActivityIndicator } from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';
import HighStockInfo from '../components/HighStockInfo';
//import Searchbar from '../components/Searchbar';

import getHigh from '../services/getHigh';
import getFinanceData from '../services/api';

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

  //<Searchbar navigation={navigation} />
  return (
    <>
      <Header
        title='Stock-app'
        currentScreen='HomeScreenNavigator'
        icon='ios-search'
        navigateTo='StocksNavigator'
        navigation={navigation}
      />
      {isLoading ? (
        <ActivityIndicator style={{ flex: 1, alignContent: 'center' }} />
      ) : (
          <SafeAreaView style={styles.container}>
            <View style={styles.stockInfoContainer}>
              <HighStockInfo style={styles.stockInfoItem} data={high} />
              <HighStockInfo style={styles.stockInfoItem} data={low} />
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
    justifyContent: "space-around",
    marginTop: 10,
  },
  stockInfoItem: {
    backgroundColor: 'blue',
  },
});