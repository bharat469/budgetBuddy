import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AuthBaseScreen from '../../components/authBaseScreen';
import InputComponent from '../../components/inputComponent';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MyButton from '../../components/myButton';
import {RouteNames} from '../../helpers/constant/routeName';
import TextWithBtnLink from '../../components/textWithBtnLink';
import {SVG_NAME} from '../../helpers/constant/svgHelpers';
import SepratorComponent from '../../components/sepratorComponent';
import SocialMediaIcon from '../../components/socialMediaIcon';

const EmailLoginScreen = props => {
  const [email, setEmail] = useState('');
  const _handleSubmitOtp = () => {
    props.navigation.navigate(RouteNames.otpScreen);
  };
  const _handleOnChangeEmail = item => {
    setEmail(item);
  };
  const _handleCreateAccount=()=>{
    props.navigation.navigate(RouteNames.createAccountScreen)
  }

  const _handlePhoneFunc = () => {
    props.navigation.navigate(RouteNames.mobileLogin);
  };
  return (
    <AuthBaseScreen
      headerTitle="Log In"
      descTitle="Please enter your email address for continue.">
      <View style={{marginHorizontal: 42, marginVertical: 12}}>
        <InputComponent
          basicInputTitle={'Email'}
          value={email}
          onChangeText={_handleOnChangeEmail}
        />
        <MyButton btnText="Submit" additionalStyle={styles.btnStyle}   onClick={_handleSubmitOtp} />
        <TextWithBtnLink
          inititText={'Or Continue with'}
          btnText={'Phone'}
          _handleLinkFunc={_handlePhoneFunc}
        />
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

export default EmailLoginScreen;

const styles = StyleSheet.create({
  btnStyle: {
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialView: {
    flexDirection: 'row',
    marginVertical: 32,
    alignItems: 'center',
  },
});
