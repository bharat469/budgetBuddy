import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteNames } from '../../constant/routeName';
import Login from '../../../screens/beforeAuth/login';

const BeforeAuthNav = () => {
    const beforeNav= createNativeStackNavigator()
  return (
  <beforeNav.Navigator>
    <beforeNav.Screen name={RouteNames.loginScreen} component={Login} />
  </beforeNav.Navigator>
  )
}

export default BeforeAuthNav