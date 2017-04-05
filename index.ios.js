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

// App Imports
import IosTabBar from './app/layouts/IosTabBar';
import Images from './app/config/images';
import Onboarding from './app/layouts/Onboarding';

export default class codefest extends Component {

  constructor(props) {
    super(props);

    this.state = {
      onboard_complete: false
    }
  }

  componentWillMount() {
    AsyncStorage.getItem('@5210App:onboard_complete')
                .then(onboard_complete => {
                  onboard_complete = JSON.parse(onboard_complete);
                  this.setState({onboard_complete});
                })
                .catch(err => {
                  console.error("Unable to get key onboard_complete");
                });
  }

  render() {

    if (!this.state.onboard_complete) {
      return(<Onboarding />);
    }
    else {
      return(
        <View style={{flex: 1}}>
        <View style={{height: 20, backgroundColor: 'powderblue'}} />
        <View style={{flex: 1, backgroundColor: 'powderblue', alignItems: 'center'}}>
          <Image source={Images.logo.source} style={Images.logo.style} />
        </View>
        <View style={{flex: 3}}>
          <IosTabBar />
        </View>
      </View>
      );
    }
  }
}

const NavigationApp = StackNavigator({
  Home: { screen: codefest}
})

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
