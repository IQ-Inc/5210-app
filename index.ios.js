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
  Image,
  AsyncStorage
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import MainScreen from './app/components/Main';
import OnboardingScreen from './app/layouts/Onboarding';
import FoodTrackerScreen from './app/components/FoodTracker';
import ScreenTimeTrackerScreen from './app/components/ScreenTimeTracker';
import DrinkTrackerScreen from './app/components/DrinkTracker';
import ActivityTrackerScreen from './app/components/ActivityTracker';

// App Imports
import IosTabBar from './app/layouts/IosTabBar';
import Images from './app/config/images';

const codefest = StackNavigator({
    Main: { screen: MainScreen },
    Onboarding: { screen: OnboardingScreen },
    FoodTracker: { screen: FoodTrackerScreen },
    ScreenTimeTracker: { screen : ScreenTimeTrackerScreen },
    DrinkTracker: { screen: DrinkTrackerScreen },
    ActivityTracker: { screen: ActivityTrackerScreen },
},
{
  headerMode: 'screen'
});

AppRegistry.registerComponent('codefest', () => codefest);
