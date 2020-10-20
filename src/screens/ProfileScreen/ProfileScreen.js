import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

import Header from '../../components/Header';
import UserInfo from './components/UserInfo';
import FavoriteStockCard from './components/FavoriteStockCard';
import allStocks from '../../services/Suggestions';

import { colors } from '../../Styles';

export default function Profile({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>

      <UserInfo navigation={navigation} />

      <View style={styles.favoriteStocksContainer}>
        <Text style={styles.favoritesStocksText}>Favorite stocks:</Text>
        <FlatList
          data={allStocks.slice(0, 3)}
          renderItem={({ item }) => <FavoriteStockCard props={item} navigation={navigation} />}
          keyExtractor={item => item.symbol}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  favoriteStocksContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  favoritesStocksText: {
    fontSize: 16,
    marginLeft: 20,
  },
});