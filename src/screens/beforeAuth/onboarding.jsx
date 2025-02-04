import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import ImageBaseScreen from '../../components/imageBaseScreen';
import MyButton from '../../components/myButton';
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../../helpers/constant/font';
import { COLORS } from '../../helpers/constant/colors';
import { RouteNames } from '../../helpers/constant/routeName';
import { SVG_NAME } from '../../helpers/constant/svgHelpers';
import IndicatorWrapper from '../../assets/svg/wrapper/IndicatorWrapper';
import {_onboardData} from '../../helpers/constant/jsonHelper';

const {width,height}=Dimensions.get('window')
const OnboardingScreen = (props) => {
  const [screenIndex, setScreenIndex] = useState(0);
    const _handleNavigation=()=>{
      if (screenIndex >= _onboardData.length-1) {
        props.navigation.navigate(RouteNames.loginScreen)
      } else {
        setScreenIndex(screenIndex + 1);
      }
    }

    const _renderActiveIcon = iconPostion => {
      switch (iconPostion) {
        case 'LEFT':
          return (
            <IndicatorWrapper
              firstFill={COLORS.secondaryColor}
              secondFill={COLORS.indicatorDisabledColor}
              thirdFill={COLORS.indicatorDisabledColor}
            />
          );
         
        case 'MIDDLE':
          return (
            <IndicatorWrapper
              firstFill={COLORS.indicatorDisabledColor}
              secondFill={COLORS.secondaryColor}
              thirdFill={COLORS.indicatorDisabledColor}
            />
          );
         
        case 'RIGHT':
          return (
            <IndicatorWrapper
              firstFill={COLORS.indicatorDisabledColor}
              secondFill={COLORS.indicatorDisabledColor}
              thirdFill={COLORS.secondaryColor}
            />
          );
          
        default:
          props.navigation.navigate(RouteNames.loginScreen);
          break;
      }
    };

    const _currentData=_onboardData[screenIndex]
    const _currentIcon=_renderActiveIcon(_currentData?.activeBtn)

  return (

    <View style={styles.onboardingStyle}>
     <View style={styles.onBoardStyle}>
        <View style={styles.svgIconStyle}>
          {_currentData?.svgIcon}
        </View>
        {/* <IndicatorWrapper/> */}
        {_currentIcon}

        <Text style={styles.descTextStyle}>
          {_currentData?.descText}
        </Text>
      </View>
           <MyButton
           btnText="Next"
          //  isRightIcon={true}
           additionalStyle={{marginHorizontal:22,alignItems:'center',marginVertical:70}}
           onClick={_handleNavigation}
        />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({

  onboardingStyle:{
    flex:1,
    backgroundColor:COLORS.primaryColor
  },
  onBoardStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  svgIconStyle: {
    marginVertical: 22,
    paddingVertical: 22,
  },
  descTextStyle: {
    marginVertical: 22,
    fontSize: FONT_SIZE.h26,
    marginHorizontal: 22,
    textAlign: 'center',
    color: COLORS.white,
    lineHeight: 30,
    letterSpacing: 0.9,
    fontWeight: FONT_WEIGHT.h800,
  },
  btnStyle: {
    marginHorizontal: 22,
    marginVertical: 32,
    borderRadius: 25,
    padding: 18,
  },
});
