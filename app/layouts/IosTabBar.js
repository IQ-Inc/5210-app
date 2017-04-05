import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

// Third Part Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// App Imports
import Home from '../components/Home';
import Stickers from '../components/Stickers';
import Settings from '../components/Settings';

export default class IosTabBar extends Component {

    static navigationOptions = {
        header : {
            visible: false,
        }
    };

    state = {
        selectedTab: 'home'
    }

    render() {
        return (
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
                    <Home navigation={this.props.navigation} />
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
                    <Stickers />
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
                    <Settings />
                </Ionicons.TabBarItemIOS>
            </TabBarIOS>
        )
    }
}