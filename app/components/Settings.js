import React, { Component } from 'react';

import {
  Text,
  View,
  Button,
  Linking,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import FIcons from 'react-native-vector-icons/Foundation';
import FAIcons from 'react-native-vector-icons/FontAwesome';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import urls from '../config/urls';

export default class Settings extends Component {

    constructor(props) {
        super(props);

        this._resetDevice = this._resetDevice.bind(this);
    }

    _resetDevice() {
        const { navigate } = this.props.navigation;
        
        AsyncStorage.setItem('@5210App:onboard_complete', JSON.stringify(false))
                    .then(onboard_complete => {
                        navigate('Main');
                    })
                    .catch(err => {
                        console.error("Unable to save onboard_complete");
                    });
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'powderblue', borderTopWidth: 2, borderTopColor: '#ffffff'}}>
                <ScrollView style={{flex: 1}}>
                    <TouchableOpacity>
                        <View style={styles.box}>
                            <Text style={styles.header}>Visit our Website</Text>
                            <MCIcons name="web" size={40} style={{color: '#ffffff'}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.box}>
                            <Text style={styles.header}>Sign up for Text Messages</Text>
                            <FAIcons name="mobile-phone" size={40} style={{color: '#ffffff'}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.box}>
                            <Text style={styles.header}>View 5-2-1-0 Video</Text>
                            <FIcons name="play-video" size={40} style={{color: '#ffffff'}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._resetDevice}>
                        <View style={styles.box}>
                            <Text style={styles.header}>Reset Application (Demo Only)</Text>
                            <FAIcons name="power-off" size={40} style={{color: '#ffffff'}} />
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'powderblue',
        padding: 7,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderBottomWidth: 2,
        borderBottomColor: '#ffffff'
    }
})