import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../../screens/afterAuth/homeScreen';
import { RouteNames } from '../../constant/routeName';

const afterAuthNav= createNativeStackNavigator()

const AfterAuthNavigation = () => {
  return (
    <afterAuthNav.Navigator>
        <afterAuthNav.Screen component={HomeScreen} name={RouteNames.homePageScreen} />
    </afterAuthNav.Navigator>
  )
}

export default AfterAuthNavigation