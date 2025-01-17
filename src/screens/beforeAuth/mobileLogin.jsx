import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AuthBaseScreen from '../../components/authBaseScreen';
import {FONT_FAMILY, FONT_SIZE} from '../../helpers/constant/font';
import {COLORS} from '../../helpers/constant/colors';
import InputComponent from '../../components/inputComponent';
import {MODE_NAMES} from '../../helpers/constant/modeName';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MyButton from '../../components/myButton';
import SepratorComponent from '../../components/sepratorComponent';
import SocialMediaIcon from '../../components/socialMediaIcon';
import {SVG_NAME} from '../../helpers/constant/svgHelpers';
import TextWithBtnLink from '../../components/textWithBtnLink';
import {RouteNames} from '../../helpers/constant/routeName';
import {useDispatch, useSelector} from 'react-redux';
import {REDUX_NAME} from '../../helpers/constant/reduxName';

const {Height, Width} = Dimensions.get('window');

const MobileLogin = props => {
  const [data, setData] = useState({
    phoneNumber: '',

  });

  const {countryCode}=useSelector(state=>state.constant)
  const dispatch = useDispatch();
  const {isSendOtp, loginData} = useSelector(state => state.auth);



  useEffect(() => {
    if (isSendOtp) {
      props.navigation.navigate(RouteNames.otpScreen, {loginData,data});
    }
  }, [isSendOtp]);

  const _handlePhoneNumber = item => {
    setData(prevData => ({
      ...prevData,
      phoneNumber: item,
    }));
  };

  const _handleSubmit = () => {
   
    if (data.phoneNumber ) {
 
      let body = {
        send_on: 'number',
        country_code: `+${countryCode}`,
        contact_number: data?.phoneNumber,
      };

      dispatch({type: REDUX_NAME.SET_LOGIN_SCREEN, payload: {body}});
    }
  };

  const _handleEmailFunc = () => {
    props.navigation.navigate(RouteNames.emailScreen);
  };

  const _handleCreateAccount = () => {
    props.navigation.navigate(RouteNames.createAccountScreen);
  };

  const _storeCountryCode = item => {
    console.log('item',item)
    setData({...data, country_code: item});
  };

  return (
    <AuthBaseScreen
      headerTitle="Log In"
      descTitle="Kindly enter your phone number to proceed.">
      <View style={styles.mobileLoginMainConatiner}>
        <View style={styles.SectionTwo}>
          <InputComponent
            mode={MODE_NAMES.WITH_COUNTRY_CODE}
            value={data.phoneNumber}
            onChangeText={_handlePhoneNumber}
            sendCodePhoneno={_storeCountryCode}
          />
        </View>
        <View style={styles.sectionThree}>
          <MyButton
            btnText="Submit"
            additionalStyle={styles.btnStyle}
            onClick={_handleSubmit}
          />

          <TextWithBtnLink
            inititText={'Or Continue with'}
            btnText={'Email'}
            _handleLinkFunc={_handleEmailFunc}
          />
        </View>
      </View>
      <View style={{alignItems: 'center', marginVertical: 22}}>
        <SepratorComponent />
        <View style={styles.socialView}>
          <SocialMediaIcon socialIcon={SVG_NAME.googleIcon} />
          <SocialMediaIcon socialIcon={SVG_NAME.facebookIcon} />
          <SocialMediaIcon socialIcon={SVG_NAME.appleIcon} />
        </View>
        <View style={{marginTop: 30}}>
          <TextWithBtnLink
            inititText={'Don’t have an account?'}
            btnText={'Create an account'}
            _handleLinkFunc={_handleCreateAccount}
          />

          <TextWithBtnLink
            inititText={'By continuing, you accept the'}
            btnText={'Terms of Service and Privacy Policy'}
            additionalStyle={{marginHorizontal: 12}}
          />
        </View>
      </View>
    </AuthBaseScreen>
  );
};

export default MobileLogin;

const styles = StyleSheet.create({
  mobileLoginMainConatiner: {
    flex: 1,
    // alignItems: 'center',
  },

  SectionTwo: {
    flex: 1,
    marginVertical: 12,
  },
  btnStyle: {
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionThree: {
    marginHorizontal: 32,
  },

  socialView: {
    flexDirection: 'row',
    marginVertical: 32,
    alignItems: 'center',
  },
});
