import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImageBaseScreen from '../../components/imageBaseScreen';
import MyButton from '../../components/myButton';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../../helpers/constant/font';
import { COLORS } from '../../helpers/constant/colors';
import { RouteNames } from '../../helpers/constant/routeName';

const {width,height}=Dimensions.get('window')
const OnboardingScreen = (props) => {
    const _handleNavigation=()=>{
        props.navigation.navigate(RouteNames.loginScreen)
    }
  return (
    <ImageBaseScreen>
      <View style={styles.onboardingSecondaryContainer}>
        <Text style={styles.headerText}>
          Discover Your Dream Home in Virtual Reality
        </Text>
        <Text style={styles.discriptionText}>
          Experience properties like never before! Take a virtual tour and book
          your perfect home with ease.
        </Text>
        <MyButton
          btnText="Get Started"
          isRightIcon={true}
          additionalStyle={{ marginVertical: 12,width:width/1.21}}
          onClick={_handleNavigation}
        />
      </View>
    </ImageBaseScreen>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  onboardingSecondaryContainer: {
    marginVertical: 22,
    marginHorizontal: 22,
    alignItems: 'flex-start',
  },
  headerText:{
    fontSize:FONT_SIZE.h24,
    fontFamily:FONT_FAMILY.GILORY_BOLD,
    color:COLORS.fontDarkColor,
    letterSpacing:0.3,
    paddingVertical:12,
    lineHeight:31
  },
  discriptionText:{
    fontSize:FONT_SIZE.h16,
    fontFamily:FONT_FAMILY.GILORY_REGULAR,
    lineHeight:21,
    color:COLORS.fontLightColor,
    width:width/1.4,
    letterSpacing:0.5,
    paddingVertical:12,
  }
});
