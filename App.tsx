

import React, { useEffect } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,

} from 'react-native';
import Navigation from './src/helpers/navigation';
import SplashScreen from 'react-native-splash-screen';

function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={{flex:1}}>
     <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default App;
