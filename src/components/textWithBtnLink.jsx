import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {FONT_FAMILY, FONT_SIZE} from '../helpers/constant/font';
import {COLORS} from '../helpers/constant/colors';

const TextWithBtnLink = props => {
  const {inititText = '', btnText = '', additionalStyle = {},_handleLinkFunc=()=>{},isChangeWhiteText={}} = props;
  return (
    <View style={[styles.siginUpTextContainer, additionalStyle]}>
      <Text style={[styles.footerInititalText,isChangeWhiteText]}>
        {inititText}{' '}
        <TouchableWithoutFeedback onPress={_handleLinkFunc}>
          <Text style={styles.footerAfterText}>{btnText}</Text>
        </TouchableWithoutFeedback>
      </Text>
    </View>
  );
};

export default TextWithBtnLink;

const styles = StyleSheet.create({
  siginUpTextContainer: {
    flexDirection: 'row',
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  footerInititalText: {
    fontSize: FONT_SIZE.h14,
    color: COLORS.white,
    fontFamily: FONT_FAMILY.GILORY_REGULAR,
    textAlign:'center',
    lineHeight:18
  },
  footerAfterText: {
    fontSize: FONT_SIZE.h14,
    fontFamily: FONT_FAMILY.GILROY_SEMIBOLD,
    color: COLORS.secondaryColor,
  },
});
