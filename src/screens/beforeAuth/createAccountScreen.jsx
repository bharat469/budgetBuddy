import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AuthBaseScreen from '../../components/authBaseScreen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputComponent from '../../components/inputComponent';
import { MODE_NAMES } from '../../helpers/constant/modeName';
import MyButton from '../../components/myButton';
import TextWithBtnLink from '../../components/textWithBtnLink';
import SepratorComponent from '../../components/sepratorComponent';
import SocialMediaIcon from '../../components/socialMediaIcon';
import { SVG_NAME } from '../../helpers/constant/svgHelpers';
import { RouteNames } from '../../helpers/constant/routeName';


const CreateAccountScreen = (props) => {
  const [data, setData] = useState({
    Name: '',
    Email: '',
    phoneNumer: '',
  });
  const [error, setErrors] = useState({});
  
  function isValidEmail(email) {
    // Regular expression pattern to validate email addresses
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Use the test method of the regular expression to check if the email matches the pattern
    return emailPattern.test(email);
  }

  const validateForm = () => {
    const newError = {};

    if (!data.Email) {
      error.email = 'Email is required';
    } else if (!isValidEmail(LoginData.Email)) {
      newError.email = 'Invalid email format';
    }
    if (!data.Name) {
      error.name = 'Name is required';
    } 
    const _handleSubmit = () => {
        props.navigation.navigate(RouteNames.otpScreen);
      };
 

    setErrors(newError);
    return Object.keys(newError).length === 0;
  };

  const _handleSubmit = () => {
    props.navigation.navigate(RouteNames.otpScreen);
  };

  return (
    <AuthBaseScreen
      headerTitle="Sign up"
      descTitle="Enter your details below to create an account">
   
        <View style={styles.InputComponentStyle} >
          <InputComponent
            basicInputTitle={'Name'}
            value={data.Name}
            onChangeText={(text)=>setData({...data,Name:text})}
          />
          <InputComponent
            basicInputTitle={'Email (Optional)'}
            value={data.Email}
            onChangeText={(text)=>setData({...data,Email:text})}
          />
        </View>
            <InputComponent
              mode={MODE_NAMES.WITH_COUNTRY_CODE}
              value={data.phoneNumer}
              onChangeText={(text)=>setData({...data,phoneNumer:text})}
            />
              <MyButton
              btnText="Submit"
              additionalStyle={styles.btnStyle}
              onClick={_handleSubmit}
            />
            <View>
            <TextWithBtnLink
              inititText={'Already have an account'}
              btnText={'? Log in'}
              additionalStyle={{marginHorizontal: 12}}
            />
            </View>
            <View style={{alignItems: 'center', marginVertical: 22}}>
          <SepratorComponent />
          <View style={styles.socialView}>
            <SocialMediaIcon socialIcon={SVG_NAME.googleIcon} />
            <SocialMediaIcon socialIcon={SVG_NAME.facebookIcon} />
            <SocialMediaIcon socialIcon={SVG_NAME.appleIcon} />
          </View>
          <View style={{}}>
        
            <TextWithBtnLink
              inititText={'By continuing, you accept the'}
              btnText={'Terms of Service and Privacy Policy'}
              additionalStyle={{marginHorizontal: 32}}
            />
          </View>
          </View>

    </AuthBaseScreen>
  );
};

export default CreateAccountScreen;

const styles = StyleSheet.create({
    InputComponentStyle:{
        marginHorizontal:32,
        marginVertical:12
    },
    btnStyle:{
        marginHorizontal:32,
        marginTop:22,
        alignItems:'center'
    },
    socialView: {
        flexDirection: 'row',
        marginVertical: 32,
        alignItems:'center'
      },
});
