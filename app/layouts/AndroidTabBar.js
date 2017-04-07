import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../components/Home';
import Stickers from '../components/Stickers';
import Settings from '../components/Settings';
import History from '../components/History';

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
      { key: '1' },
      { key: '2' },
      { key: '3' },
      { key: '4' },
    ],
  };

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
  	// Not sure why props doesn't provide this;
  	// need to get it from the this pointer...
  	let { backgroundColor } = this.props.style;
    return <TabBar {...props} style={{backgroundColor}} labelStyle={styles.label} renderIcon={this._renderIcon}/>;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <Home navigation={this.props.navigation}/>
    case '2':
      return <Stickers />
    case '3':
      return <History />;
    case '4':
        return <Settings navigation={this.props.navigation}/>
    default:
      return null;
    }
  };

  _renderIcon = ({route}) => {
    switch(route.key) {
        case '1':
            return  <MCIcons
                       name="home-outline"
                       size={36}
                       />
        case '2':
            return <MCIcons
                       name="star-outline"
                       size={36}
                       />
        case '3':
             return <MCIcons
                       name="history"
                       size={36}
                       />
        case '4':
             return <MCIcons
                       name="information-outline"
                       size={36}
                       />
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