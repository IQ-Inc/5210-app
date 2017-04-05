import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import MCIcons from 'react-native-vector-icons/MaterialIcons';

export default class OnboardingButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} disabled={this.props.disabled}>
                <View style={{flex: 1}} style={styles.button}>
                    <Text style={styles.text}>{this.props.text.toUpperCase()}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        borderColor: '#ffffff',
        borderRadius: 50,
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    text: {
        color: '#ffffff',
        fontSize: 20,
        fontFamily: 'Avenir',
        fontWeight: 'bold'
    }
});