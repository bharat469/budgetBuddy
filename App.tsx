

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,

} from 'react-native';
import Navigation from './src/helpers/navigation';

function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar />
    <Navigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
