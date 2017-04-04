import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  Dimensions,
  TextInput
} from 'react-native';

// Third Part Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcons from 'react-native-vector-icons/FontAwesome';

import Images from '../config/images';
import OnboardingButton from '../components/OnboardButton';

export default class Onboarding extends Component {

    state = {
        zipcode: '',
        household: '',
        child_age: ''
    }

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

        let buttonWidth = width - (styles.input.marginHorizontal * 2);

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
                <View style={[styles.fullScreen, styles.nextPage, {height, width}, {backgroundColor: 'skyblue'}]}>
                    <FAIcons name='location-arrow' size={50} style={styles.icon} />
                    <Text style={styles.header}>What is your ZipCode?</Text>
                    <TextInput
                        style={[styles.input, {width: buttonWidth}]}
                        keyboardType='numeric'
                        maxLength={5}
                        onChangeText={(zipcode) => this.setState({zipcode})}
                    />
                    <OnboardingButton text="Next" onPress={this._next} />
                </View>
                <View style={[styles.fullScreen, styles.lastPage, {height, width}, {backgroundColor: 'steelblue'}]}>
                    <FAIcons name='home' size={50} style={styles.icon} />
                    <Text style={[styles.header, {width: buttonWidth}]}>What is your household size?</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={(household) => this.setState({household})}
                    />
                    <OnboardingButton text="Next" onPress={this._next} />
                </View>
                <View style={[styles.fullScreen, styles.lastPage, {height, width}, {backgroundColor: 'skyblue'}]}>
                    <FAIcons name='child' size={50} style={styles.icon} />
                    <Text style={[styles.header, {width: buttonWidth}]}>How old is your child?</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='numeric'
                        maxLength={1}
                        onChangeText={(child_age) => this.setState({child_age})}
                    />
                    <OnboardingButton text="Next" onPress={this._next} />
                </View>
                <View style={[styles.fullScreen, styles.lastPage, {height, width}, {backgroundColor: 'steelblue'}]}>
                    <FAIcons name='check' size={50} style={styles.icon} />
                    <Text style={styles.header}>Finished!</Text>
                    <OnboardingButton text="Track Your Progress!" onPress={this._next} />
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
    header: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    input: {
        borderRadius: 10,
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 5,
        paddingVertical: 5,
        backgroundColor: '#ffffff'
    },
    icon: {
        color: '#ffffff',
        marginVertical: 20
    }
});