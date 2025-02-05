import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../helpers/constant/colors';
import RightArrowIcon from '../assets/svg/arrowRight.svg';
import {FONT_FAMILY, FONT_SIZE} from '../helpers/constant/font';

const MyButton = ({
  btnText = '',
  onClick = () => {},
  isRightIcon = false,
  additionalStyle,
  mode = '',
  socialIcon = null,
}) => {
  return mode !== 'SOCIAL_BTN' ? (
    <TouchableOpacity
      onPress={onClick}
      style={[
        styles.btnView,
        isRightIcon && styles.btnWithIconView,
        additionalStyle,
      ]}
      accessible
      accessibilityRole="button"
      accessibilityLabel={btnText}>
      <Text style={styles.btnTextStyle}>{btnText}</Text>
      {isRightIcon && <RightArrowIcon />}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={onClick}
      style={[styles.btnSocialView, additionalStyle]}
      accessible
      accessibilityRole="button"
      accessibilityLabel={btnText}>
      {socialIcon && <View style={styles.iconContainer}>{socialIcon}</View>}
      <Text
        style={[
          styles.btnTextStyle,
          mode === 'SOCIAL_BTN' && {color: COLORS.fontDarkColor},
        ]}>
        {btnText}
      </Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  btnView: {
    padding: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
    backgroundColor: COLORS.secondaryColor,
    borderRadius: 25,
  },
  btnWithIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    alignItems: 'center',
  },
  btnSocialView: {
    padding: 18,
    borderWidth: 1,
    backgroundColor: COLORS.white,
    borderRadius: 25,
    borderColor: COLORS.borderColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    color: COLORS.btnPrimaryColor,
    fontFamily: FONT_FAMILY.GILORY_BOLD,
    fontSize: FONT_SIZE.h16,
  },
  iconContainer: {
    marginHorizontal: 12,
  },
});
