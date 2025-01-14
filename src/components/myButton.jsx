import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import { COLORS } from '../helpers/constant/colors';
import RightArrowIcon from '../assets/svg/arrowRight.svg'
import { FONT_FAMILY, FONT_SIZE } from '../helpers/constant/font';

const MyButton = props => {
  const {btnText = '', onClick = () => {},isRightIcon=false,additionalStyle} = props;
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={[styles.btnView,isRightIcon&&styles.btnWithIconView,additionalStyle]}>
        <Text style={styles.btnTextStyle}>{btnText}</Text>
        <RightArrowIcon/>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  btnView: {
    padding: 18,
    shadowColor: '#435391',
    shadowOffset: {
      width: 0,
      height: 14,
    },
    shadowOpacity: 0.3,
    shadowRadius: 33.6,
    elevation: 6,
    backgroundColor:COLORS.btnPrimaryColor,
  borderRadius:25
  },
  btnWithIconView:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:22,
    alignItems:'center'
  },
  btnTextStyle:{
    color:COLORS.white,
    fontFamily:FONT_FAMILY.GILROY_SEMIBOLD,
    fontSize:FONT_SIZE.h16
  }
});
