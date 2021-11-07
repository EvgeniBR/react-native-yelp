// import {createStackNavigator , createAppContainer} from 'react-navigation'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ResultsShowScreen from './src/screens/ResultsShoeScreen';
import SearchScreen from './src/screens/SearchScreen';


const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultShow: ResultsShowScreen,
}, {
  initialRouteName:'Search',
  defaultNavigationOptions:{
    title:'Buisness Search'
  }
});

export default createAppContainer(navigator);