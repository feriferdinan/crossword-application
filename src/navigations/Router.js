import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import LoadingScreen from "../screens/LoadingScreen/Loading"
import LoginScreen from "../screens/LoginScreen/index"
import HomeScreen from "../screens/HomeScreen/index"



const AppStack = createStackNavigator({ 
  Home: HomeScreen, 
},{
  headerMode: 'none',
  navigationOptions: {
  headerVisible: false,
},});
const AuthStack = createStackNavigator({ Login: LoginScreen},{
  headerMode: 'none',
  navigationOptions: {
  headerVisible: false,
},});
const AuthLoadingScreen = createStackNavigator({Loading:LoadingScreen },{
  headerMode: 'none',
  navigationOptions: {
  headerVisible: false,
},});



export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));