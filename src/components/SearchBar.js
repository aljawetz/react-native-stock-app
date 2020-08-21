import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import AutoComplete from 'react-native-autocomplete-input';
import Suggestions from '../utils/Suggestions';

export default function Searchbar({ navigation }) {
  const [query, setQuery] = useState('');

  function findStocks(query) {
    if (query === '') {
      return [];
    }
    return Suggestions.filter(suggestion =>
      suggestion.name.toLowerCase().startsWith(query.toLowerCase()) ||
      suggestion.code.toLowerCase().startsWith(query.toLowerCase())
    );
  }

  return (
    <AutoComplete
      data={findStocks(query)}
      defaultValue={query}
      onChangeText={setQuery}
      keyExtractor={item => item.code}
      placeholder="Enter a stock"

      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      listContainerStyle={styles.listContainer}
      listStyle={styles.list}

      renderItem={({ item }) => (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('NotificationsScreen', { symbol: item.code })}>
          <Text>{item.name}  {item.code}</Text>
        </TouchableOpacity >
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  listContainer: {
    marginTop: 2,
  },
  list: {
    borderRadius: 4,
    borderColor: 'white',
  }
});