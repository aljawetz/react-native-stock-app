import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView, Text, ActivityIndicator } from 'react-native';
import Card from '../components/Card';
//import Searchbar from '../components/Searchbar';
import getFinanceData from '../services/api';

import { colors } from '../Styles';

export default function Home({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [currencies, setCurrencies] = useState([]);
  const [stocks, setStocks] = useState({});
  const [taxes, setTaxes] = useState({});

  async function getData() {
    try {
      let [currenciesData, stocksData, taxesData] = await getFinanceData();
      setCurrencies(currenciesData);
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
  //<Searchbar navigation={navigation} />
  return (
    <>
      {isLoading ? (
        <ActivityIndicator style={{ flex: 1, alignContent: 'center' }} />
      ) : (
          <SafeAreaView style={styles.container}>

            <FlatList
              data={currencies}
              renderItem={({ item }) => <Card props={item} navigation={navigation} />}
              keyExtractor={item => item.name}
            />
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
  }
});