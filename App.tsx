import React, {useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Navigation from './src/helpers/navigation';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import store from './src/helpers/redux/store';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Navigation />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
