import React from 'react';
import { View, Text } from 'react-native';

export default function StockInfo({ data }) {

  return (
    <View>
      {data.map((thisData, idx) => <Text key={idx}>{thisData}</Text>)}
    </View>
  );
}