import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import GoogleIcon from '../../assets/svg/goggle.svg';
import FacebookIcon from '../../assets/svg/facebook.svg';
import AppleIcon from '../../assets/svg/apple.svg';
import ImageBaseScreen from '../../components/imageBaseScreen';
import MyButton from '../../components/myButton';
import {FONT_FAMILY, FONT_SIZE} from '../../helpers/constant/font';
import {COLORS} from '../../helpers/constant/colors';
import {RouteNames} from '../../helpers/constant/routeName';
import TextWithBtnLink from '../../components/textWithBtnLink';
import { SVG_NAME } from '../../helpers/constant/svgHelpers';
import { useDispatch } from 'react-redux';
import { REDUX_NAME } from '../../helpers/constant/reduxName';
import { GoogleSignin} from '@react-native-google-signin/google-signin';

const {height, width} = Dimensions.get('window');
const Login = props => {
   const dispatch = useDispatch()

  const _handleOnClick = () => {
    props.navigation.navigate(RouteNames.mobileLogin);
  };
  const _handleCreateAccount = () => {
    props.navigation.navigate(RouteNames.createAccountScreen);
  };

  const _handleSocialSiginIn=(name)=>{
    switch(name){
      case REDUX_NAME.SET_GOOGLE_SIGN_IN:
        dispatch({type:REDUX_NAME.SET_GOOGLE_SIGN_IN});
        break;
      case REDUX_NAME.SET_FACEBOOK_SIGN_IN:
        dispatch({type:REDUX_NAME.SET_FACEBOOK_SIGN_IN})  
        break;
      default:
        break;  
    }
  
  }

  useEffect(()=>{
    GoogleSignin.configure({
      webClientId:'76806152869-n3rknbu7dqfmdgqs8ikgr5bb9t48crid.apps.googleusercontent.com',
    
    })
  },[])

  return (
    <View style={styles.mobileLogin}>
     <Image
     source={require('../../assets/png/login2.png')}
     style={{width:width,height:height/2,marginVertical:22}}
     />
      <View style={styles.sectionStyle}>
        <View style={styles.loginContainer}>

        <MyButton
          btnText="Continue with Mobile Number"
          additionalStyle={{alignItems: 'center', marginVertical: 6}}
          onClick={_handleOnClick}
        />
        <MyButton
          btnText="Login with Google"
          additionalStyle={{alignItems: 'center', marginVertical: 6}}
          mode="SOCIAL_BTN"
          onClick={()=>_handleSocialSiginIn(REDUX_NAME.SET_GOOGLE_SIGN_IN)}
          socialIcon={<GoogleIcon />}
        />
        <MyButton
          btnText="Login with Facebook"
          additionalStyle={{alignItems: 'center', marginVertical: 6}}
          onClick={()=>_handleSocialSiginIn(REDUX_NAME.SET_FACEBOOK_SIGN_IN)}
          mode="SOCIAL_BTN"
          socialIcon={<FacebookIcon />}
        />
        <MyButton
          btnText="Login with Apple"
          additionalStyle={{alignItems: 'center', marginVertical: 6}}
          mode="SOCIAL_BTN"
          socialIcon={<AppleIcon />}
        />

        <TextWithBtnLink
          inititText="Don’t have an account? "
          btnText="Sign Up"
          _handleLinkFunc={_handleCreateAccount}
          isChangeWhiteText={{color:COLORS.black}}
        />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mobileLogin: {
    flex: 1,
    backgroundColor: COLORS.primaryColor,
  },
  loginContainer: {marginHorizontal: 12, marginVertical: 32},
  siginUpTextContainer: {
    flexDirection: 'row',
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerInititalText: {
    fontSize: FONT_SIZE.h14,
    color: COLORS.fontLightColor,
    fontFamily: FONT_FAMILY.GILORY_REGULAR,
  },
  footerAfterText: {
    fontSize: FONT_SIZE.h14,
    fontFamily: FONT_FAMILY.GILROY_SEMIBOLD,
    color: COLORS.btnPrimaryColor,
    marginHorizontal: 4,
  },
  sectionStyle: {
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    width: width,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    shadowColor: '#070707',
    shadowOffset: {
      width: 0,
      height: -16,
    },
    shadowOpacity: 0.4,
    shadowRadius: 40,
    elevation: 6,
  },
});
