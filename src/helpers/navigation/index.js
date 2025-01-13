import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import BeforeAuthNav from './beforeAuthNav';


const Navigation = () => {
  return (
 <NavigationContainer>
    <BeforeAuthNav/>
 </NavigationContainer>
  )
}

export default Navigation