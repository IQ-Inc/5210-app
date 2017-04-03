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
    );
  }
}

AppRegistry.registerComponent('codefest', () => codefest);
