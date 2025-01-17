import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import Flags from 'react-world-flags';
import {MODE_NAMES} from '../helpers/constant/modeName';
import DownArrow from '../assets/svg/downArrow.svg';
import {COLORS} from '../helpers/constant/colors';
import {FONT_FAMILY, FONT_SIZE} from '../helpers/constant/font';
import {parsePhoneNumberFromString} from 'libphonenumber-js';
import { useDispatch } from 'react-redux';
import { saveCountryCode } from '../helpers/redux/slice/constantSaveSlice';

const {Width, Height} = Dimensions.get('window');

const InputComponent = props => {
  const {
    placeholder = '',
    value = '',
    onChangeText = () => {},
    secureTextEntry = false,
    style,
    mode = '',
    basicInputTitle = '',
    sendCodePhoneno=()=>{}
  } = props;
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('91');
  const dispatch=useDispatch()
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'United States',
    dial_code: '91',
    cca2: 'IN',
  });
  const [error, setError] = useState('');


  useEffect(()=>{
  dispatch(saveCountryCode(countryCode))
  },[countryCode])

  const handleSelectCountry = country => {
    setCountryCode(country.callingCode[0]);
    setShow(false);
    setSelectedCountry(country);
    sendCodePhoneno(countryCode)
  };

  const _handleOnChange = item => {
    onChangeText(item);
    // validatePhoneNumber(`${countryCode}${item}`);
  };

  const validatePhoneNumber = (phoneNumber, countryCode) => {
    let finalPhoneNumber = `+${countryCode + phoneNumber}`;
    sendCodePhoneno(countryCode)
    const parsedNumber = parsePhoneNumberFromString(finalPhoneNumber);
    console.log(parsedNumber);
    if (parsedNumber && parsedNumber.isValid()) {
      setError(''); // Valid number
    } else {
      console.log(phoneNumber.length);
      if (phoneNumber.length === 0) {
        // setError(' ');
      } else {
        setError('Invalid Phone Number !!!'); // Invalid number
      }
    }
  };

  const InputWithCountryCode = () => {
    return (
      <View style={styles.inputWithCountryCodeStyle}>
        <View >
          <Text style={styles.phoneNumberText}>Phone Number</Text>
          <TouchableWithoutFeedback onPress={() => setShow(true)}>
            <View style={styles.countrySelectView}>
              <CountryPicker
                withFlag
                withAlphaFilter
                withFilter
                countryCode={selectedCountry?.cca2}
                onSelect={handleSelectCountry}
                visible={show}
                onClose={() => setShow(false)}
                withCountryNameButton={false} // Hide country name button
                withCallingCode={false} // Hide calling code
              />
              <DownArrow />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.inputStyle}>
          <Text style={styles.countryPickerStyle}>+{countryCode}</Text>
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={_handleOnChange}
            secureTextEntry={secureTextEntry}
            style={style ?? styles.inputTab}
            onEndEditing={() =>
              validatePhoneNumber(`${value}`, `${countryCode}`)
            }
            keyboardType="phone-pad"
            maxLength={15}
          />
        </View>
      </View>
    );
  };

  const BasicInput = () => {
    return (
      <View style={styles.basicInputStyle}>
        <Text style={styles.basicTextStyle}>{basicInputTitle}</Text>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          style={style ?? styles.inputBasicTab}
        />
      </View>
    );
  };

  return (
    <View>
      {mode === MODE_NAMES.WITH_COUNTRY_CODE
        ? InputWithCountryCode()
        : BasicInput()}
      {/* Error Message */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  flag: {
    width: 28,
    height: 14,
    marginRight: 10,
  },
  inputStyle: {
    flex: 0.9,
    borderWidth: 1,
    flexDirection: 'row',
      borderRadius: 25,
    borderColor: COLORS.lightBorderWithOpacity,
    alignItems: 'center',
  },
  countrySelectView: {
    flexDirection: 'row',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
    alignItems: 'center',
    borderRadius: 25,
    borderColor: COLORS.lightBorderWithOpacity,
    marginHorizontal: 12,
    
  },
  inputWithCountryCodeStyle: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft:22
  },
  inputTab: {
    flex: 1,
    color: COLORS.black,
    fontFamily: FONT_FAMILY.GILROY_SEMIBOLD,
    fontSize: FONT_SIZE.h14,
    marginLeft: 6,
    paddingVertical: 18,
  },
  phoneNumberText: {
    marginVertical: 6,
    left:8,
    color: COLORS.fontDarkColor,
    fontSize: FONT_SIZE.h14,
    fontFamily: FONT_FAMILY.GILORY_MEDIUM,
  },

  countryPicker: {
    marginTop: 10,
    maxHeight: Height / 2, // Adjust picker modal height
  },
  errorText: {
    color: COLORS.errorColor,
    fontSize: FONT_SIZE.h14,
    marginTop: 10,
    textAlign: 'center',
  },
  countryPickerStyle: {
    marginHorizontal: 6,
  },
  basicInputStyle: {
    //  backgroundColor:'blue',
  },
  inputBasicTab: {
    borderWidth: 1,
    padding: 12,
    marginVertical: 6,
    height: 52,
    borderRadius: 25,
    borderColor: COLORS.lightBorderWithOpacity,
    
  },
});
