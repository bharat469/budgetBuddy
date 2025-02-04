import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {Children} from 'react';
import GlassMask from '../assets/svg/Mask.svg';
import LogoIcon from '../assets/svg/logo.svg';
import BackBtn from '../assets/svg/circularArrow.svg';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../helpers/constant/colors';
import {FONT_FAMILY, FONT_SIZE} from '../helpers/constant/font';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SVG_NAME} from '../helpers/constant/svgHelpers';

const {height, width} = Dimensions.get('window');

const AuthBaseScreen = ({children, headerTitle = '', descTitle = ''}) => {
  const navigation = useNavigation();
  const _handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <KeyboardAwareScrollView
      style={{flex: 1, backgroundColor: COLORS.primaryColor}}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        {/* SVG Mask */}
        <StatusBar
          barStyle='light-content'
          translucent={true}
          backgroundColor="transparent"
        />
      
        <View style={styles.topSection}>
          <TouchableOpacity onPress={_handleGoBack} style={{marginHorizontal:12,marginVertical:12}}>
            <BackBtn />
          </TouchableOpacity>

          {/* <LogoIcon style={styles.logoSection} /> */}
          <View style={styles.logoSection}>{SVG_NAME.logoIcon}</View>
        </View>

        <View style={styles.headerComponent}>
          <Text style={styles.headerText}>{headerTitle}</Text>
          <Text style={styles.descText}>{descTitle}</Text>
        </View>

        <View style={styles.content}>{children}</View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AuthBaseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginVertical: 36,
  },
  topSection: {
    alignItems: 'baseline',
    marginVertical:12
  },
  logoSection: {
    alignItems:'center',
    justifyContent:'center',
     width:width
  },
  content: {
    flex: 1,
  },
  headerComponent: {
    alignItems: 'center',
    marginHorizontal:12
  },
  headerText: {
    fontSize: FONT_SIZE.h28,
    fontFamily: FONT_FAMILY.GILORY_BOLD,
    letterSpacing: 0.5,
    color: COLORS.white,
    lineHeight: 34.66,
  },
  descText: {
    fontSize: FONT_SIZE.h14,
    fontFamily: FONT_FAMILY.GILORY_REGULAR,
    lineHeight: 25,
    color: COLORS.white,
    letterSpacing: 0.5,
    alignItems: 'center',
  },
});
