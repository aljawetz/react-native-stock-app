import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { colors } from '../Styles';

export default function ChartButtons({ numberOfDays, idx, setData, fullData, selectedButtonIdx, setSelectedButtonIdx }) {

  function handleSelection(timespan, idx) {

    if (timespan === 'MAX') setData(fullData);
    else setData(fullData.slice(-timespan));

    setSelectedButtonIdx(idx);
  }


  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        { backgroundColor: (selectedButtonIdx === idx) ? colors.white : colors.blue }
      ]}
      key={idx}
      onPress={() => handleSelection(numberOfDays, idx)}
    >
      <Text
        style={[
          styles.buttonText,
          { color: (selectedButtonIdx === idx) ? colors.blue : colors.white }
        ]}
      >
        {numberOfDays + 'D'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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