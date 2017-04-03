/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

// App Imports
import IosTabBar from './app/layouts/IosTabBar';
import Images from './app/config/images';
import Onboarding from './app/layouts/Onboarding';

export default class codefest extends Component {

  render() {
    return (
      <Onboarding />
//      <View style={{flex: 1}}>
//        <View style={{height: 20, backgroundColor: 'powderblue'}} />
//        <View style={{flex: 1, backgroundColor: 'powderblue', alignItems: 'center'}}>
//          <Image source={Images.logo.source} style={Images.logo.style} />
//        </View>
//        <IosTabBar />
 //     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('codefest', () => codefest);
