import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import Card from './components/Card';
import Header from '../../components/Header';
import StockCard from './components/HighStockCard';
import { colors, headerHeight } from '../../Styles';

import getHigh from './services/getHigh';
import getFinanceData from '../../services/api';

export default function Home({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [high, setHigh] = useState({});
  const [low, setLow] = useState({});
  const [stocks, setStocks] = useState({});
  const [taxes, setTaxes] = useState({});

  async function getData() {
    try {
      let [highInfo, lowInfo] = await getHigh();
      setHigh(highInfo);
      setLow(lowInfo);

      let [currenciesData, stocksData, taxesData] = await getFinanceData();
      setStocks(stocksData);
      setTaxes(taxesData);

      setIsLoading(false);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header
        title='stock-app'
      />
      {isLoading ? (
        <ActivityIndicator style={{ flex: 1, alignContent: 'center' }} />
      ) : (
          <SafeAreaView style={styles.container}>
            <StockCard high={high} low={low} />
            <FlatList
              data={stocks}
              renderItem={({ item }) => <Card props={item} navigation={navigation} />}
              keyExtractor={item => item.name}
            />
          </SafeAreaView>
        )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});