import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = React.useState('');
  const [results, setResults] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);


  const searchApi = async () => {
    try{
    setIsLoading(true)
    const response = await yelp.get('/search',{
      params: {
        limit: 50,
        term,
        location: 'san jose'
      }
    });
    setResults(response.data.businesses);
    setIsLoading(false)
  }catch(err){
    setErrorMessage('somthing went wrong!')
  }
  }

  return (
    <View>
      <SearchBar
        onTermSubmit={() => searchApi()}
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
      />
      {isLoading?<Text>Loading ... </Text>:null}
      {errorMessage?<Text>{errorMessage}</Text>:null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
