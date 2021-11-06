import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/buisnesses',
  headers:{
    Authorization: 'Bearer _5jx8XhBgv_4EP7q3F0pEM_VrUwWiToDAGN_IBcDlZf5grsGTsNPE_xTH_874OziXYmu9zuyVKOb-II4FciVCIDgvmnp5rkytPZ8wYSI4ppKEM1mjJs2K-hjTFOGYXYx' 
  }
})

