import React, { useState, useEffect } from 'react';
import { View, Dimensions, ActivityIndicator } from 'react-native';
import { LineChart } from "react-native-chart-kit";

const chartConfig = {
  backgroundGradientFrom: "#eee",
  backgroundGradientTo: "#eee",
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0.5,
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
            withVerticalLabels={false}
            withHorizontalLabels={false}
            withOuterLines={false}
            withInnerLines={false}
          />
        )}
    </View>
  );
}