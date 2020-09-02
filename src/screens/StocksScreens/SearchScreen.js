import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Animated } from 'react-native';

import allStocks from './services/Suggestions';

import Header from '../../components/Header';
import SearchBar from './components/SearchBar';
import StockCard from './components/StockCard';
import { colors, headerHeight, searchbarHeight } from '../../Styles';

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState(allStocks);
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, (headerHeight + searchbarHeight));

  const translateY = diffClamp.interpolate({
    inputRange: [0, (headerHeight + searchbarHeight)],
    outputRange: [0, -(headerHeight + searchbarHeight)],
  });

  return (
    <View style={{ backgroundColor: colors.white }}>
      <Animated.View
        style={{
          transform: [
            { translateY: translateY }
          ],
          elevation: 4,
          zIndex: 100,
        }}
      >
        <Header title='Search' />
        <SearchBar query={query} setQuery={setQuery} setSuggestions={setSuggestions} />
      </Animated.View>
      <View style={styles.container}>
        <FlatList
          data={suggestions}
          renderItem={({ item }) => <StockCard props={item} navigation={navigation} />}
          keyExtractor={item => item.symbol}
          onScroll={e => scrollY.setValue(e.nativeEvent.contentOffset.y)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingTop: headerHeight + searchbarHeight + 10,
  },
});