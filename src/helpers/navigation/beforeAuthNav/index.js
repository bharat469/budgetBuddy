import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteNames } from '../../constant/routeName';
import Login from '../../../screens/beforeAuth/login';
import OnboardingScreen from '../../../screens/beforeAuth/onboarding';
import MobileLogin from '../../../screens/beforeAuth/mobileLogin';
import OtpScreen from '../../../screens/beforeAuth/otpScreen';
import EmailLoginScreen from '../../../screens/beforeAuth/emailLoginScreen';
import CreateAccountScreen from '../../../screens/beforeAuth/createAccountScreen';

const BeforeAuthNav = () => {
    const beforeNav= createNativeStackNavigator()
  return (
  <beforeNav.Navigator>
    <beforeNav.Screen name={RouteNames.onboardingScreen} component={OnboardingScreen} options={{headerShown:false}} />
    <beforeNav.Screen name={RouteNames.loginScreen} component={Login} options={{headerShown:false}} />
    <beforeNav.Screen name={RouteNames.mobileLogin} component={MobileLogin} options={{headerShown:false}} />
    <beforeNav.Screen name={RouteNames.otpScreen} component={OtpScreen} options={{headerShown:false}} />
    <beforeNav.Screen name={RouteNames.emailScreen} component={EmailLoginScreen} options={{headerShown:false}} />
    <beforeNav.Screen name={RouteNames.createAccountScreen} component={CreateAccountScreen} options={{headerShown:false}} />
  </beforeNav.Navigator>
  )
}

export default BeforeAuthNav