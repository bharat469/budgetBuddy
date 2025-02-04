import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import AuthBaseScreen from '../../components/authBaseScreen';
import OtpInputComponent from '../../components/otpInputComponent';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TextWithBtnLink from '../../components/textWithBtnLink';
import {useDispatch, useSelector} from 'react-redux';
import {resetAllChecks} from '../../helpers/redux/slice/authSlice';
import { REDUX_NAME } from '../../helpers/constant/reduxName';

const OtpScreen = ({route}) => {
  const { loginData, data} = route.params
  const {countryCode}=useSelector(state=>state.constant)
  const {SendOtpData}=useSelector(state=>state.auth)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetAllChecks());
  }, []);

  const _hanldeSumbitBtn=(otpNumber)=>{
    let body={
      "confimCode":SendOtpData,
       "code":otpNumber,
       
     }
   
     dispatch({type:REDUX_NAME.SET_VERIFY_OTP,payload:{body}})
    
  }
  return (
    <AuthBaseScreen
      headerTitle="Enter OTP"
      descTitle="Please enter the OTP sent to your phone.">
      <View style={styles.allOtpComponent}>
        <OtpInputComponent 
        onSubmit={_hanldeSumbitBtn}
        otpLength={6}
        />
        <TextWithBtnLink
          inititText={"Didn't receive code"}
          btnText={'? Resend'}
        />
      </View>
    </AuthBaseScreen>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  allOtpComponent: {
    flex: 1,
  },
});
