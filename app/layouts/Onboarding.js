import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';

// Third Part Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Images from '../config/images';
import OnboardingButton from '../components/OnboardButton';

export default class Onboarding extends Component {

    constructor(props) {
        super(props);

        StatusBar.setHidden(true); // Ian added this comment on Eric's swaggin' new Macbook Pro 13 in which
        // with the extremely clicky keys.

        this._next = this._next.bind(this);
        this.index = 0;
        this.scrollView = 'undefined';
    }

    _next() {
        let {height, width} = Dimensions.get('window');

        width *= ++this.index;

        this.scrollView.scrollTo({x: width, y: 0, animated: true});
    }

    render() {
        let {height, width} = Dimensions.get('window');

        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                removeClippedSubviews={true}
                scrollEnabled={false}
                scrollsToTop={false}
                ref={(component) => {
                    this.scrollView = component;
                }}
            >
                <View style={[styles.fullScreen, {height, width}]}>
                    <Image source={Images.moveLogo.source} style={Images.moveLogo.style} />
                    <OnboardingButton text="Get Started!" onPress={this._next} />
                </View>
                <View style={[styles.fullScreen, styles.nextPage, {height, width}]}>
                    <Text style={styles.header}>Next Page</Text>
                    <OnboardingButton text="Next" onPress={this._next} />
                </View>
                <View style={[styles.fullScreen, styles.lastPage, {height, width}]}>
                    <Text style={styles.header} onPress={this._next}>Last Page</Text>
                    <OnboardingButton text="Submit" />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'powderblue'
    },
    nextPage: {
        backgroundColor: 'skyblue'
    },
    lastPage: {
        backgroundColor: 'steelblue'
    },
    header: {
        fontFamily: 'Avenir',
        fontSize: 40,
        color: '#ffffff',
        fontWeight: 'bold'
    }
});