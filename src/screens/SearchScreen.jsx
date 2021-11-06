import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ResultList from '../components/ResultList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = React.useState('');
  const [searchApi, results, errorMessage, isLoading] = useResults()

  const filterByPrice = (price) => {
    return results.filter(result =>{
      return result.price === price;
    })
  }

  return (
    <View>
      <SearchBar
        onTermSubmit={() => searchApi(term)}
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
      />
      {isLoading?<Text>Loading ... </Text>:null}
      {errorMessage?<Text>{errorMessage}</Text>:null}
      <ScrollView>
      <ResultList results = {filterByPrice('$')} title="Cost Effective" />
      <ResultList results = {filterByPrice('$$')} title="Bit Pricier" />
      <ResultList results = {filterByPrice('$$$')} title="Big Spender" />
      <ResultList results = {filterByPrice('$$$$')} title="Bill Spender" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
