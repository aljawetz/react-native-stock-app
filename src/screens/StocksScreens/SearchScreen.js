import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native';

import allStocks from '../../services/Suggestions';

import SearchBar from './components/SearchBar';
import StockCard from './components/StockCard';
import { colors } from '../../Styles';

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState(allStocks);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar query={query} setQuery={setQuery} setSuggestions={setSuggestions} />
      <View style={styles.flatListContainer}>
        <FlatList
          data={suggestions}
          renderItem={({ item }) => <StockCard props={item} navigation={navigation} />}
          keyExtractor={item => item.symbol}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1
  },
  flatListContainer: {
    marginBottom: 57,
  },
});