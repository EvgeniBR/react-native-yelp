import React from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);


  const searchApi = async (searchTerm) => {
    try{
    setIsLoading(true)
    const response = await yelp.get('/search',{
      params: {
        limit: 50,
        term: searchTerm,
        location: 'san jose'
      }
    });
    setResults(response.data.businesses);
    setIsLoading(false)
  }catch(err){
    setErrorMessage('somthing went wrong!')
  }
  }

  React.useEffect(()=>{
    searchApi('pasta')
  },[])

  return [searchApi, results, errorMessage, isLoading];
}
