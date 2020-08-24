import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView, ActivityIndicator, Button } from 'react-native';
import Header from '../components/Header';
import { colors } from '../Styles';
import Chart from '../components/Chart';
import StockInfo from '../components/StockInfo';
import getTimeSeriesDaily from '../services/getDaily';

export default function ChartScreen({ route, navigation }) {
  const { symbol } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState([]);
  const [lastData, setLastData] = useState([]);

  async function getStock() {
    try {
      let [labels, stockData, lastStockData] = await getTimeSeriesDaily(symbol);
      console.log(lastStockData);

      setFullData(stockData);
      setData(stockData);
      setLastData(lastStockData);
      setIsLoading(false);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getStock();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Header
        title={symbol}
        currentScreen='ChartScreen'
        navigation={navigation}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container} >
          <View style={styles.buttonsContainer}>
            <Button title='1D' onPress={() => setData(fullData.slice(-1))} />
            <Button title='3D' onPress={() => setData(fullData.slice(-3))} />
            <Button title='1W' onPress={() => setData(fullData.slice(-7))} />
            <Button title='1M' onPress={() => setData(fullData.slice(-30))} />
            <Button title='3M' onPress={() => setData(fullData.slice(-60))} />
            <Button title='6M' onPress={() => setData(fullData.slice(-180))} />
            <Button title='Max' onPress={() => setData(fullData)} />
          </View>
          <View style={styles.chartContainer}>
            {isLoading ? (
              <ActivityIndicator style={{ flex: 1, alignContent: 'center' }} />
            ) : (
                <Chart stockData={data} />
              )}
          </View>
          <StockInfo data={lastData}/>
        </ScrollView>
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
  chartContainer: {
    marginTop: 20,
  }
});