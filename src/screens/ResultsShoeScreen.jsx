import React from 'react';
import { FlatList, Image, StyleSheet, Text } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = React.useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  React.useEffect(() => {
    getResult(id);
  }, []);

  if (!result) return null;
  return (
    <>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{uri: item}} />
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image:{
    height: 200,
    width:300,
  }
});

export default ResultsShowScreen;
