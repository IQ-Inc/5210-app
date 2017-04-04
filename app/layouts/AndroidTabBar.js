import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../components/Home';
import Stickers from '../components/Stickers';
import Settings from '../components/Settings';

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
      { key: '3', title: 'History' },
      { key: '4', title: 'Settings' },
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
      return <Home navigation={this.props.navigation}/>
    case '2':
      return <Stickers />
    case '3':
      return null;
    case '4':
        return <Settings />
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