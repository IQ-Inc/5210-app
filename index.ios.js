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
  TabBarIOS
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class codefest extends Component {

  state = {
    selectedTab: 'redTab',
    notifCount: 0,
    presses: 0,
    selectedTab: 'home'
  };

  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
        <View style={{height: 20, backgroundColor: 'powderblue'}} />
        <View style={{flex: 1, backgroundColor: 'powderblue', alignItems: 'center'}}>
          <Image source={require('./assets/img/simple-logo.png')} style={{width: 200, height: 103}} />
        </View>
        <TabBarIOS
        unselectedTintColor="white"
        tintColor="steelblue"
        unselectedItemTintColor="white"
        barTintColor="powderblue"
        style={{flex: 4}}>
          <Ionicons.TabBarItemIOS
            title="Home"
            iconName="ios-home-outline"
            selectedIconName="ios-home"
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}>
            <View style={{flex: 1}}>
              <View style={{flex: 1, flexDirection:'row', backgroundColor: 'skyblue'}}>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text>5</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text>2</Text>
                </View>
              </View>
              <View style={{flex: 1, flexDirection:'row', backgroundColor: 'steelblue'}}>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text>1</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text>0</Text>
                </View>
              </View>
            </View>
          </Ionicons.TabBarItemIOS>
          <MCIcons.TabBarItemIOS
            title="Stickers"
            iconName="sticker"
            selectedIconName="sticker"
            selected={this.state.selectedTab === 'stickers'}
            onPress={() => {
              this.setState({
                selectedTab: 'stickers',
              });
            }}>
            <View style={{flex: 1}}>
              <Text>Stickers Here</Text>
            </View>
          </MCIcons.TabBarItemIOS>
          <Ionicons.TabBarItemIOS
            title="Settings"
            iconName="ios-settings-outline"
            selectedIconName="ios-settings"
            selected={this.state.selectedTab === 'settings'}
            onPress={() => {
              this.setState({
                selectedTab: 'settings',
              });
            }}>
            <Text>Settings</Text>
          </Ionicons.TabBarItemIOS>
        </TabBarIOS>
      </View>
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
