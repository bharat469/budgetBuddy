import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MyButton from './myButton';
import {COLORS} from '../helpers/constant/colors';
import { FONT_FAMILY, FONT_SIZE } from '../helpers/constant/font';

const OtpInputComponent = ({
  otpLength = 4, // Number of OTP digits
  title = 'Enter the OTP sent to your phone', // Screen title
  buttonText = 'Submit', // Button text
  onSubmit = () => {}, // Callback function when OTP is submitted
  errorMessage = 'Please fill all the fields.', // Default error message
  inputStyle = {}, // Style for OTP inputs
  containerStyle = {}, // Style for the main container
  buttonStyle = {}, // Style for the submit button
  buttonTextStyle = {}, // Style for button text
  titleStyle = {}, // Style for the title
}) => {
  const [otp, setOtp] = useState(Array(otpLength).fill(''));
  const [error, setError] = useState('');

  const handleInputChange = (text, index) => {
    if (text.length > 1) return; // Restrict input to one character
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Automatically focus next input if filled
    if (text && index < otp.length - 1) {
      const nextInput = inputs[index + 1];
      nextInput?.focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length !== otpLength) {
      setError(errorMessage);
    } else {
      setError('');
      onSubmit(enteredOtp); 
    }
  };
  const handleKeyPress = (key, index) => {
    if (key === 'Backspace' && index > 0 && otp[index] === '') {
      const previousInput = inputs[index - 1];
      previousInput?.focus();
      const newOtp = [...otp];
      newOtp[index - 1] = ''; // Clear the previous input
      setOtp(newOtp);
    }
  };


  const inputs = [];

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.otpContainer}>
        {otp.map((_, index) => (
          <TextInput
            key={index}
            ref={ref => (inputs[index] = ref)} // Track refs for inputs
            style={[styles.input, inputStyle,error&&{borderColor:COLORS.errorColor}]}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={text => handleInputChange(text, index)}
            value={otp[index]}
            onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, index)}
          />
        ))}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <MyButton
        btnText={buttonText}
        additionalStyle={[styles.buttonStyle, buttonTextStyle]}
        onClick={handleSubmit}
      />
    </View>
  );
};

export default OtpInputComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal:26
  },
  
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  input: {
    width: 52,
    height: 52,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: COLORS.lightBorderWithOpacity,
    borderRadius: 25,
    textAlign: 'center',
    fontSize: FONT_SIZE.h16,
    backgroundColor: COLORS.white,
    fontFamily:FONT_FAMILY.GILROY_SEMIBOLD
  },
  error: {
    color: COLORS.errorColor,
    marginBottom: 20,
    fontSize: FONT_SIZE.h14,
    textAlign:'center'
  },
  buttonStyle:{
  alignItems:'center'
  }

});
