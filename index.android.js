import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreen from './app/components/Main';
import FoodTrackerScreen from './app/components/FoodTracker';
import ScreenTimeTrackerScreen from './app/components/ScreenTimeTracker';

const codefest = StackNavigator({
    Main: { screen: MainScreen },
    FoodTracker: { screen: FoodTrackerScreen },
    ScreenTimeTracker: { screen : ScreenTimeTrackerScreen }
});

AppRegistry.registerComponent('codefest', () => codefest);
