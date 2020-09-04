import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../Styles';

import allStocks from '../services/Suggestions';

export default function SearchBar({ query, setQuery, setSuggestions }) {

  function getSuggestions(query) {
    setSuggestions(allStocks.filter(suggestion => (
      suggestion.name.toLowerCase().startsWith(query.toLowerCase()) ||
      suggestion.symbol.toLowerCase().startsWith(query.toLowerCase())
    )));
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name='ios-search' style={styles.icon} />
        <TextInput
          style={styles.input}
          value={query}
          onChangeText={query => { setQuery(query), getSuggestions(query) }}
          placeholder="Search"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  inputContainer: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 7,
  },
  icon: {
    alignSelf: 'center',
    padding: 10,
    fontSize: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});