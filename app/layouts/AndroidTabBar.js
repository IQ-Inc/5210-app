/**
 * An Android tab bar
 * Ian
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';

import HomeComponent from '../components/HomeComponent';
import StickersComponent from '../components/StickersComponent';
import SettingsComponent from '../components/SettingsComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
  	color: '#000',
  	fontWeight: '400',
  }
});

export default class AndroidTabBar extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Home' },
      { key: '2', title: 'Stars' },
      { key: '3', title: 'Settings' },
    ],
  };

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
  	// Not sure why props doesn't provide this;
  	// need to get it from the this pointer...
  	let { backgroundColor } = this.props.style;
    return <TabBar {...props} style={{backgroundColor}} labelStyle={styles.label} />;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <HomeComponent />
    case '2':
      return <StickersComponent />
    case '3':
      return <SettingsComponent />
    default:
      return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={[styles.container, this.props.style]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}