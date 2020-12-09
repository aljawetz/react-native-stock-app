import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';

import { colors } from '../../Styles';
import Header from '../../components/Header';
import ChartButtons from '../../components/ChartButtons';
import Chart from '../../components/Chart';
import CompanyOverview from './components/CompanyOverview';

import getStockChartData from './services/getStockChartData';
import getCompanyOverview from './services/getCompanyOverview';

const buttons = [7, 14, 21, 30, 90, 'YT']

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

      overviewData['Price'] = fullData[fullData.length - 1]
      setFullData(stockData);
      setData(stockData);
      setOverview(overviewData);
      setIsLoading(false);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getStock();
  }, []);

  return (
    <>
      <Header
        title={symbol}
        backIcon
        navigation={navigation}
      />
      {isLoading ? (
        <ActivityIndicator style={{ flex: 1, alignContent: 'center' }} />
      ) : (
          <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.container} >
              <View style={styles.chartContainer}>
                <View style={styles.buttonsContainer}>
                  {buttons.map((button, idx) =>
                    <ChartButtons
                      numberOfDays={button}
                      idx={idx}
                      setData={setData}
                      fullData={fullData}
                      key={idx}
                      selectedButtonIdx={selectedButtonIdx}
                      setSelectedButtonIdx={setSelectedButtonIdx}
                    />
                  )}
                </View>
                <Chart stockData={data} />
              </View>
              <CompanyOverview data={overview} />
            </ScrollView>
          </SafeAreaView >
        )}
    </>
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
    marginVertical: 10,
  },
});