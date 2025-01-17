import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
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

const {height, width} = Dimensions.get('window');

const AuthBaseScreen = ({children, headerTitle = '', descTitle = ''}) => {
  const navigation = useNavigation();
  const _handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <KeyboardAwareScrollView style={{flex:1,backgroundColor:COLORS.white}} 
    enableOnAndroid={true} 
      keyboardShouldPersistTaps="handled" 
    >
      <View style={styles.container}>
        {/* SVG Mask */}
        <StatusBar
          barStyle="dark-content"
          translucent={true}
          backgroundColor="transparent"
        />

        <View style={{width: width, alignItems: 'center', marginLeft: 12}}>
          <GlassMask />
        </View>

        {/* Top Section */}
        <View style={styles.topSection}>
          <TouchableWithoutFeedback onPress={_handleGoBack}>
            <BackBtn />
          </TouchableWithoutFeedback>

          <LogoIcon style={styles.logoSection} />
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
    backgroundColor: COLORS.white,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'baseline',
    position: 'absolute',
    paddingHorizontal: 16, // Add horizontal padding
    zIndex: 1, // Ensure it's above the GlassMask
    marginVertical: 56,
  },
  logoSection: {
    marginHorizontal: 32,
  },
  content: {
    flex: 1,
  },
  headerComponent: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: FONT_SIZE.h28,
    fontFamily: FONT_FAMILY.GILORY_BOLD,
    letterSpacing: 0.5,
    color: COLORS.fontDarkColor,
    lineHeight: 34.66,
  },
  descText: {
    fontSize: FONT_SIZE.h14,
    fontFamily: FONT_FAMILY.GILORY_REGULAR,
    lineHeight: 25,
    color: COLORS.fontLightColor,
    letterSpacing: 0.5,
    alignItems: 'center',
  },
});
