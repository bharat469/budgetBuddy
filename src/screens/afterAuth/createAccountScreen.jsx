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
    Designation: '',
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
            basicInputTitle={'Email'}
            value={data.Email}
            onChangeText={(text)=>setData({...data,Email:text})}
          />
          <InputComponent
            basicInputTitle={'Designation'}
            value={data.Designation}
            onChangeText={(text)=>setData({...data,Designation:text})}
          />
        </View>
        
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
