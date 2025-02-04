import {View, Text} from 'react-native';
import React, {useDebugValue, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BeforeAuthNav from './beforeAuthNav';
import {useDispatch, useSelector} from 'react-redux';
import {saveUserToken} from '../redux/slice/authSlice';
import AfterAuthNavigation from './afterAuthNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Navigation = () => {
  const [token, setToken] = useState(null);
  const dispatch = useDispatch()
  const {userToken} = useSelector(state => state.auth);
  const GetTokenUser = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('USERTOKEN');
      console.log(storedToken);
      if (storedToken) {
       
        setToken(storedToken);
        dispatch(saveUserToken(storedToken));
      } else {
        console.log('User token not found.');
        setToken(null); // Explicitly set token to null if not found
      }
    } catch (error) {
      console.error('Error retrieving user token:', error);
    }
  };
  useEffect(() => {
    GetTokenUser();
  }, []);



  return (
    <NavigationContainer>
      {token || userToken ? <AfterAuthNavigation /> : <BeforeAuthNav />}
    </NavigationContainer>
  );
};

export default Navigation;
