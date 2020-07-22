import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { colors } from '../Styles';
import Chart from '../components/Chart';
import Button from '../components/Button';

export default function NotificationsScreen({ route, navigation }) {
  const { symbol } = route.params;
  const [time, setTime] = useState('');

  return (
    <>
      <Header
        title={symbol}
        currentScreen='NotificationsScreen'
        navigation={navigation}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container} >
          <View style={styles.buttonsContainer}>
            <Button title='1D' onPress={() => setTime('1D')} />
            <Button title='3D' onPress={() => setTime('3D')} />
            <Button title='1W' onPress={() => setTime('1W')} />
            <Button title='1M' onPress={() => setTime('1M')} />
            <Button title='3M' onPress={() => setTime('3M')} />
            <Button title='6M' onPress={() => setTime('6M')} />
          </View>
          <View style={styles.chartContainer}>
            <Chart symbol={symbol} time={time} />
          </View>
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