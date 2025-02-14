import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../../screens/afterAuth/homeScreen';
import { RouteNames } from '../../constant/routeName';
import CreateAccountScreen from '../../../screens/afterAuth/createAccountScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const afterAuthNav= createBottomTabNavigator()

const customTabBar=({state,desciption})=>{

}

const AfterAuthNavigation = () => {
  return (
    <afterAuthNav.Navigator>
        <afterAuthNav.Screen component={HomeScreen} name={RouteNames.homePageScreen} options={{headerShown:false}} />
        <afterAuthNav.Screen component={CreateAccountScreen} name={RouteNames.createAccountScreen} options={{headerShown:false}}/>
    </afterAuthNav.Navigator>
  )
}

export default AfterAuthNavigation