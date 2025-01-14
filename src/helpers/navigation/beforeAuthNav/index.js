import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteNames } from '../../constant/routeName';
import Login from '../../../screens/beforeAuth/login';
import OnboardingScreen from '../../../screens/beforeAuth/onboarding';

const BeforeAuthNav = () => {
    const beforeNav= createNativeStackNavigator()
  return (
  <beforeNav.Navigator>
    <beforeNav.Screen name={RouteNames.onboardingScreen} component={OnboardingScreen} options={{headerShown:false}} />
    <beforeNav.Screen name={RouteNames.loginScreen} component={Login} options={{headerShown:false}} />
  </beforeNav.Navigator>
  )
}

export default BeforeAuthNav