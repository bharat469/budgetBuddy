import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { COLORS } from '../helpers/constant/colors';
import { FONT_FAMILY, FONT_SIZE } from '../helpers/constant/font';

const SepratorComponent = (props) => {
    const {title='or'}=props
  return (
    <View style={styles.separatorContainer}>
      <View style={styles.line} />
      <Text style={styles.orText}>{title}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default SepratorComponent;

const styles = StyleSheet.create({
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.lightBorder,
  },
  orText: {
    marginHorizontal: 12,
    fontSize: FONT_SIZE.h14,
    fontFamily:FONT_FAMILY.GILORY_REGULAR,
    color: COLORS.fontLightColor2,
  },
});
