import React, { useState, useEffect } from 'react';
import { View, Dimensions, ActivityIndicator } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import getTimeSeriesDaily from '../services/getDaily';

const chartConfig = {
  backgroundGradientFrom: "#eee",
  backgroundGradientTo: "#eee",
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(50, 50, 50, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
};

export default function Chart({ symbol, time }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  async function getStock() {
    try {
      let [labels, stockData] = await getTimeSeriesDaily(symbol);

      setData({
        labels,
        datasets: [
          {
            data: stockData.reverse(),
          }
        ],
      });
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getStock();
  }, [symbol]);


  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <ActivityIndicator style={{ flex: 1, alignContent: 'center' }} />
      ) : (
          <LineChart
            data={data}
            chartConfig={chartConfig}
            width={Dimensions.get('window').width - 16}
            height={220}
            withDots={false}
            bezier
            withVerticalLabels={false}
            withHorizontalLabels={false}
            withOuterLines={false}
            withInnerLines={false}
          />
        )
      }
    </View>
  );
}