import {Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import GoogleIcon from '../../assets/svg/goggle.svg'
import FacebookIcon from '../../assets/svg/facebook.svg'
import AppleIcon from '../../assets/svg/apple.svg'
import ImageBaseScreen from '../../components/imageBaseScreen';
import MyButton from '../../components/myButton';
import { FONT_FAMILY, FONT_SIZE } from '../../helpers/constant/font';
import { COLORS } from '../../helpers/constant/colors';
import { RouteNames } from '../../helpers/constant/routeName';
import TextWithBtnLink from '../../components/textWithBtnLink';

const {height,width}=Dimensions.get('window')
const Login = (props) => {
  const _handleOnClick=()=>{
   props.navigation.navigate(RouteNames.mobileLogin)
  }
  const _handleCreateAccount=()=>{
    props.navigation.navigate(RouteNames.createAccountScreen)
  }

  return (
    <ImageBaseScreen SectionHeight={height/2.2}>
      <View style={styles.loginContainer}>
        <MyButton
          btnText="Continue with Mobile Number"
          additionalStyle={{alignItems: 'center', marginVertical:6}}
          onClick ={_handleOnClick}
        />
        <MyButton
          btnText="Login with Google"
          additionalStyle={{alignItems: 'center', marginVertical:6}}
          mode='SOCIAL_BTN'
          socialIcon={<GoogleIcon/>}
        />
        <MyButton
          btnText="Login with Facebook"
          additionalStyle={{alignItems: 'center', marginVertical:6}}
          mode='SOCIAL_BTN'
          socialIcon={<FacebookIcon/>}
        />
        <MyButton
          btnText="Login with Apple"
          additionalStyle={{alignItems: 'center', marginVertical:6}}
          mode='SOCIAL_BTN'
          socialIcon={<AppleIcon/>}
        />

      <TextWithBtnLink inititText = 'Don’t have an account' btnText = 'Sign Up'   _handleLinkFunc={_handleCreateAccount} />
      </View>
    </ImageBaseScreen>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {marginHorizontal: 12, marginVertical: 32},
  siginUpTextContainer:{
    flexDirection:'row',
    marginVertical:12,
    alignItems:'center',
    justifyContent:'center'
  },
  footerInititalText:{
    fontSize:FONT_SIZE.h14,
    color:COLORS.fontLightColor,
    fontFamily:FONT_FAMILY.GILORY_REGULAR
  },
  footerAfterText:{
    fontSize:FONT_SIZE.h14,
    fontFamily:FONT_FAMILY.GILROY_SEMIBOLD,
    color:COLORS.btnPrimaryColor,
    marginHorizontal:4
  }
});
