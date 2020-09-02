import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import Header from '../../components/Header';
import CurrencyCard from './components/CurrencyCard';
import getFinanceData from '../../services/api';

import { colors, headerHeight } from '../../Styles';

export default function Home({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [currencies, setCurrencies] = useState([]);

  async function getData() {
    try {
      let [currenciesData, stocksData, taxesData] = await getFinanceData();
      setCurrencies(currenciesData);
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
        title='Currencies'
        currentScreen='CurrenciesNavigator'
        navigation={navigation}
      />
      {isLoading ? (
        <ActivityIndicator style={{ flex: 1, alignContent: 'center' }} />
      ) : (
          <SafeAreaView style={styles.container}>
            <FlatList
              data={currencies}
              renderItem={({ item }) => <CurrencyCard props={item} navigation={navigation} />}
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
    marginTop: headerHeight,
  }
});