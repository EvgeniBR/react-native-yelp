import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ResultList from '../components/ResultList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = React.useState('');
  const [searchApi, results, errorMessage, isLoading] = useResults()

  return (
    <View>
      <SearchBar
        onTermSubmit={() => searchApi(term)}
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
      />
      {isLoading?<Text>Loading ... </Text>:null}
      {errorMessage?<Text>{errorMessage}</Text>:null}
      <Text>We have found {results.length} results</Text>
      <ResultList title="Cost Effective" />
      <ResultList title="Bit Pricier" />
      <ResultList title="Big Spender" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
