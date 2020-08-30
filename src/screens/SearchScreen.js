import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, SafeAreaView, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import allStocks from '../utils/Suggestions';

import Header from '../components/Header';
import StockCard from '../components/StockCard';
import { colors } from '../Styles';

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState(allStocks);

  function getSuggestions(query) {
    setSuggestions(allStocks.filter(suggestion => (
      suggestion.name.toLowerCase().startsWith(query.toLowerCase()) ||
      suggestion.code.toLowerCase().startsWith(query.toLowerCase())
    )));
  }

  return (
    <>
      <Header
        title='Search'
        currentScreen='HomeScreenNavigator'
        navigation={navigation}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <Ionicons name='ios-search' style={styles.icon} />
          <TextInput
            style={styles.input}
            value={query}
            onChangeText={query => { setQuery(query), getSuggestions(query) }}
            placeholder="Search"
          />
        </View>
        <FlatList
          data={suggestions}
          renderItem={({ item }) => <StockCard props={item} navigation={navigation} />}
          keyExtractor={item => item.code}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 7,
  },
  icon: {
    alignSelf: 'center',
    padding: 10,
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  cardContainer: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 5,
    borderRadius: 7,
  },
});