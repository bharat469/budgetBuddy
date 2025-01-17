import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyButton from '../../components/myButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {resetAllChecks} from '../../helpers/redux/slice/authSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const _handleLogout = async () => {
    await AsyncStorage.removeItem('USERTOKEN');
    dispatch(resetAllChecks());
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <MyButton btnText="LOGOUT" onClick={_handleLogout} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
