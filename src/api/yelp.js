import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers:{
    Authorization: 'Bearer GGkD0dXSnWqcActM9MOQJlkk3KIqleW8upReWvr564_xFdkKh37Xumr4U5LNmMsdkvOdy7oSOddQLwjCPb2zEPSUMYis7bVNP2uP2a2-wBCHhaxU3tmmfDG4M_eGYXYx' 
  }
})

