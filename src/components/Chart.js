import React, { useState, useEffect } from 'react';
import { Dimensions, ActivityIndicator } from 'react-native';
import { LineChart } from "react-native-chart-kit";

import { colors } from '../Styles'

const chartConfig = {
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: () => colors.white,
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
          />
        )
      }
    </>
  );
}