import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import Header from '../components/Header';
import { colors } from '../Styles';
import Chart from '../components/Chart';
import StockInfo from '../components/StockInfo';

import getStockChartData from '../services/getStockChartData';
import getCompanyOverview from '../services/getCompanyOverview';

const buttons = [1, 3, 7, 21, 30, 90, 'MAX'];

export default function ChartScreen({ route, navigation }) {
  const { symbol } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState([]);
  const [overview, setOverview] = useState({});
  const [selectedButtonIdx, setSelectedButtonIdx] = useState(buttons.length - 1);

  async function getStock() {
    try {
      let [labels, stockData] = await getStockChartData(symbol);
      let overviewData = await getCompanyOverview(symbol);

      setFullData(stockData);
      setData(stockData);
      setOverview(overviewData);
      setIsLoading(false);

    } catch (error) {
      console.error(error);
    }
  }

  function handleSelection(timespan, idx) {

    if (timespan === 'MAX') setData(fullData);
    else setData(fullData.slice(-timespan));

    setSelectedButtonIdx(idx);
  }

  const renderButton = (numberOfDays, idx) => {

    return (
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          { backgroundColor: (selectedButtonIdx === idx) ? colors.button : colors.background }
        ]}
        key={idx}
        onPress={() => handleSelection(numberOfDays, idx)}
      >
        <Text style={styles.buttonText}>{numberOfDays + 'D'}</Text>
      </TouchableOpacity>
    );
  }

  useEffect(() => {
    getStock();
  }, []);

  return (
    <>
      <Header
        title={symbol}
        currentScreen='ChartScreen'
        navigation={navigation}
      />
      <SafeAreaView style={{ flex: 1 }}>
        {isLoading ? (
          <ActivityIndicator style={{ flex: 1, alignContent: 'center' }} />
        ) : (
            <ScrollView style={styles.container} >
              <View style={styles.buttonsContainer}>
                {buttons.map((button, idx) => renderButton(button, idx))}
              </View>
              <Chart stockData={data} />
              <StockInfo data={overview} />
            </ScrollView>
          )}
      </SafeAreaView >
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    marginHorizontal: 30,
  },

  buttonContainer: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});