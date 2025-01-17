import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import { COLORS } from '../helpers/constant/colors';

const SocialMediaIcon = props => {
  const {socialIcon = null} = props;
  return (
    <TouchableWithoutFeedback>
      <View style={styles.socialBtnInsideView}>
        {socialIcon && <View style={styles.iconContainer}>{socialIcon}</View>}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SocialMediaIcon;

const styles = StyleSheet.create({
  socialBtnInsideView:{
    marginHorizontal:12,
    borderWidth:2,
    padding:18,
    borderRadius:20,
    borderColor:COLORS.borderColorBlue
  }
});
