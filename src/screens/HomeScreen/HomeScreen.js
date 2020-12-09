import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';

import Header from '../../components/Header';
import StockCard from './components/HighStockCard';
import StockGrid from './components/StockGrid';
import { colors } from '../../Styles';

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
            <StockGrid data={stocks} navigation={navigation} />
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