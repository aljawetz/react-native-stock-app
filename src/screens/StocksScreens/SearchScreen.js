import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import allStocks from './services/Suggestions';

import Header from '../../components/Header';
import SearchBar from './components/SearchBar';
import StockCard from './components/StockCard';
import { colors } from '../../Styles';

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState(allStocks);

  return (
    <View style={{ backgroundColor: colors.white }}>
      <Header title='Search' />
      <SearchBar query={query} setQuery={setQuery} setSuggestions={setSuggestions} />
      <View style={styles.container}>
        <FlatList
          data={suggestions}
          renderItem={({ item }) => <StockCard props={item} navigation={navigation} />}
          keyExtractor={item => item.symbol}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
});