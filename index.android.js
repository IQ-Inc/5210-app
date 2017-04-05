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
import DrinkTrackerScreen from './app/components/DrinkTracker';
import ActivityTrackerScreen from './app/components/ActivityTracker';

const codefest = StackNavigator({
    Main: { screen: MainScreen },
    FoodTracker: { screen: FoodTrackerScreen },
    ScreenTimeTracker: { screen : ScreenTimeTrackerScreen },
    DrinkTracker: { screen: DrinkTrackerScreen },
    ActivityTracker: { screen: ActivityTrackerScreen }
});

AppRegistry.registerComponent('codefest', () => codefest);
