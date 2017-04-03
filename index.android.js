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

const codefest = StackNavigator({
    Main: { screen: MainScreen },
    FoodTracker: { screen: FoodTrackerScreen }
});

AppRegistry.registerComponent('codefest', () => codefest);
