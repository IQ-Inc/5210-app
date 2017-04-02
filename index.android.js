/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Images from './app/config/images';

export default class codefest extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: 20, backgroundColor: 'powderblue'}} />
        <View style={{flex: 1, backgroundColor: 'powderblue', alignItems: 'center'}}>
          <Image source={Images.logo.source} style={Images.logo.style} />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('codefest', () => codefest);
