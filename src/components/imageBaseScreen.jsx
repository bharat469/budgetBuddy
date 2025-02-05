import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  StatusBar,
  View,
  SafeAreaView,
} from 'react-native';
import React from 'react';

import {COLORS} from '../helpers/constant/colors';

const {width, height} = Dimensions.get('window');
const ImageBaseScreen = props => {
  const {image = require('../assets/png/login2.png'), children, SectionHeight= height / 2.5,} = props;
  return (
    <ImageBackground source={image} resizeMode='center' style={{ flex: 1 }}>
    <StatusBar
      barStyle='light-content'
      translucent={true}
      backgroundColor="transparent"
    />

    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.sectionStyle,{height:SectionHeight}]}>{children}</View>
    </SafeAreaView>
  </ImageBackground>
  );
};

export default ImageBaseScreen;

const styles = StyleSheet.create({
  sectionStyle: {
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
   
    width: width,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    shadowColor: '#070707',
    shadowOffset: {
      width: 0,
      height: -16,
    },
    shadowOpacity: 0.4,
    shadowRadius: 40,
    elevation: 6,
  },
});
