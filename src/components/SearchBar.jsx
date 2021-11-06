import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {Feather} from '@expo/vector-icons'
const SearchBar = ({term , onTermChange, onTermSubmit}) => {

  return <View style={styles.backgroundStyle}>
    <Feather style={styles.iconStyle} name="search" />
    <TextInput 
      style={styles.inputStyle}
      placeholder="Search"
      value={term}
      onChangeText={(newTerm)=>onTermChange(newTerm)}
      autoCapitalize="none"
      autoCorrect={false}
      onEndEditing={()=>onTermSubmit()}
    />
  </View>
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop:10,
    backgroundColor: '#f0eeee',
    height:50,
    borderRadius:5,
    marginHorizontal:15,
    flexDirection:'row'
  },
  inputStyle : {
    flex: 1,
    fontSize:18,

  },
  iconStyle : {
    fontSize: 40,
    alignSelf: 'center',
    marginHorizontal:15,

  }
});

export default SearchBar;