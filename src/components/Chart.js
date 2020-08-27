import React, { useState, useEffect } from 'react';
import { Dimensions, ActivityIndicator } from 'react-native';
import { LineChart } from "react-native-chart-kit";

import { colors } from '../Styles'

const chartConfig = {
  backgroundGradientFrom: colors.background,
  backgroundGradientTo: colors.background,
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(50, 50, 50, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
};

export default function Chart({ stockData }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setData({
      labels: [],
      datasets: [
        {
          data: stockData,
        }
      ],
    });
    setIsLoading(false);
  }, [stockData]);

  console.log(data)
  return (
    <>
      {isLoading ? (
        <ActivityIndicator style={{ flex: 1, alignContent: 'center' }} />
      ) : (
          <LineChart
            data={data}
            chartConfig={chartConfig}
            width={Dimensions.get('window').width - 10}
            height={220}
            withDots={false}
            withInnerLines={false}
            withOuterLines={false}
          />
        )
      }
    </>
  );
}