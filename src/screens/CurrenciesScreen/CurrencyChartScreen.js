import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView, ActivityIndicator, TouchableOpacity, Text } from 'react-native';

import Chart from '../../components/Chart';
import ChartButtons from '../../components/ChartButtons';
import CurrencyInfo from './components/CurrencyInfo';
import { colors } from '../../Styles';

import getCurrencyChartData from './services/getCurrencyChartData';

const buttons = [1, 3, 7, 21, 30, 90, 'MAX'];

export default function CurrencyChartScreen({ route }) {
  const { symbol } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState([]);
  const [lastData, setLastData] = useState([]);
  const [selectedButtonIdx, setSelectedButtonIdx] = useState(buttons.length - 1);

  async function getData() {
    try {
      let [labels, currencyData, lastData] = await getCurrencyChartData(symbol);
      setFullData(currencyData);
      setData(currencyData);
      setLastData(lastData);
      setIsLoading(false);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoading ? (
        <ActivityIndicator style={{ flex: 1, alignContent: 'center' }} />
      ) : (
          <ScrollView style={styles.container} >
            <View style={styles.chartContainer}>
              <View style={styles.buttonsContainer}>
                {buttons.map((button, idx) =>
                  <ChartButtons
                    numberOfDays={button}
                    idx={idx}
                    setData={setData}
                    fullData={fullData}
                    selectedButtonIdx={selectedButtonIdx}
                    setSelectedButtonIdx={setSelectedButtonIdx}
                  />
                )}
              </View>
              <Chart stockData={data} />
            </View>
            <CurrencyInfo data={lastData} symbol={symbol} />
          </ScrollView>
        )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  chartContainer: {
    backgroundColor: colors.blue,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    marginHorizontal: 30,
  },
});