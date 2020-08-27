import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, SafeAreaView, View, FlatList, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import allStocks from '../utils/Suggestions';
import Header from '../components/Header';
import { colors } from '../Styles';

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  function getSuggestions(query) {
    if (query === '') setSuggestions('');
    else {
      setSuggestions(allStocks.filter(suggestion => (
        suggestion.name.toLowerCase().startsWith(query.toLowerCase()) ||
        suggestion.code.toLowerCase().startsWith(query.toLowerCase())
      )));
    }
  }

  function renderItem(item) {
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => navigation.navigate('ChartScreen', { symbol: item.code })}
      >
        <Text>{item.name}  {item.code}</Text>
      </TouchableOpacity>
    );
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
          renderItem={({ item }) => renderItem(item)}
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