/**
 * Android application kick-off hook.
 * Ian
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
import AndroidTabBar from './app/layouts/AndroidTabBar';
import Images from './app/config/images';
import Onboarding from './app/layouts/Onboarding';

export default class codefest extends Component {

  render() {
    return (
      <Onboarding/>
      // <View style={{flex: 1}}>
      //   <View style={{height: 20, backgroundColor: 'powderblue'}} />
      //   <View style={{flex: 1, backgroundColor: 'powderblue', alignItems: 'center'}}>
      //     <Image source={Images.logo.source} style={Images.logo.style} />
      //   </View>
      //   <View style={{flex: 3}}><AndroidTabBar style={{backgroundColor: 'powderblue'}}/></View>
      // </View>
    );
  }
}

AppRegistry.registerComponent('codefest', () => codefest);
