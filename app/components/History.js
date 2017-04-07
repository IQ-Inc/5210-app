import React, { Component } from 'react';

import {
  Text,
  View,
  Button,
  Linking,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

import FIcons from 'react-native-vector-icons/Foundation';
import FAIcons from 'react-native-vector-icons/FontAwesome';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Images from '../config/images';

export default class History extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: 'skyblue'}}>
                <View style={styles.box}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>Today</Text>
                    </View>
                    <View style={styles.contentContainer}>
                        <Image source={Images.foodTracker.source} style={{width: 40, height: 40, resizeMode: 'contain'}} />
                        <FAIcons name='check' size={40} style={{color: 'green'}} />
                        <Image source={Images.screenTime.source} style={{width: 40, height: 40, resizeMode: 'contain'}} />
                        <FAIcons name='check' size={40} style={{color: 'green'}} />
                        <Image source={Images.activity.source} style={{width: 40, height: 40, resizeMode: 'contain'}} />
                        <FAIcons name='check' size={40} style={{color: 'green'}} />
                        <Image source={Images.water.source} style={{width: 40, height: 40, resizeMode: 'contain'}} />
                        <FAIcons name='check' size={40} style={{color: 'green'}} />
                    </View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.footerText}>
                            Congratulations! You Earned 4 Stickers Today
                        </Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>4/6/2017</Text>
                    </View>
                    <View style={styles.contentContainer}>
                        <Image source={Images.foodTracker.source} style={{width: 40, height: 40, resizeMode: 'contain'}} />
                        <FAIcons name='check' size={40} style={{color: 'green'}} />
                        <Image source={Images.screenTime.source} style={{width: 40, height: 40, resizeMode: 'contain'}} />
                        <FAIcons name='remove' size={40} style={{color: 'red'}} />
                        <Image source={Images.activity.source} style={{width: 40, height: 40, resizeMode: 'contain'}} />
                        <FAIcons name='remove' size={40} style={{color: 'red'}} />
                        <Image source={Images.water.source} style={{width: 40, height: 40, resizeMode: 'contain'}} />
                        <FAIcons name='check' size={40} style={{color: 'green'}} />
                    </View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.footerText}>
                            Keep it up! You can do better
                        </Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>4/5/2017</Text>
                    </View>
                    <View style={styles.contentContainer}>
                        <Image source={Images.foodTracker.source} style={{width: 40, height: 40, resizeMode: 'contain'}} />
                        <FAIcons name='check' size={40} style={{color: 'green'}} />
                        <Image source={Images.screenTime.source} style={{width: 40, height: 40, resizeMode: 'contain'}} />
                        <FAIcons name='remove' size={40} style={{color: 'red'}} />
                        <Image source={Images.activity.source} style={{width: 40, height: 40, resizeMode: 'contain'}} />
                        <FAIcons name='check' size={40} style={{color: 'green'}} />
                        <Image source={Images.water.source} style={{width: 40, height: 40, resizeMode: 'contain'}} />
                        <FAIcons name='check' size={40} style={{color: 'green'}} />
                    </View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.footerText}>
                            Keep it up! You're so close!
                        </Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>4/4/2017</Text>
                    </View>
                    <View style={styles.contentContainer}>
                        <Image source={Images.foodTracker.source} style={{width: 40, height: 40, resizeMode: 'contain'}} />
                        <FAIcons name='check' size={40} style={{color: 'green'}} />
                        <Image source={Images.screenTime.source} style={{width: 40, height: 40, resizeMode: 'contain'}} />
                        <FAIcons name='check' size={40} style={{color: 'green'}} />
                        <Image source={Images.activity.source} style={{width: 40, height: 40, resizeMode: 'contain'}} />
                        <FAIcons name='check' size={40} style={{color: 'green'}} />
                        <Image source={Images.water.source} style={{width: 40, height: 40, resizeMode: 'contain'}} />
                        <FAIcons name='check' size={40} style={{color: 'green'}} />
                    </View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.footerText}>
                            Congratulations! You Earned 10 Stickers Today
                        </Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>4/3/2017</Text>
                    </View>
                    <View style={styles.contentContainer}>
                        <Image source={Images.foodTracker.source} style={{width: 40, height: 40, resizeMode: 'contain'}} />
                        <FAIcons name='check' size={40} style={{color: 'green'}} />
                        <Image source={Images.screenTime.source} style={{width: 40, height: 40, resizeMode: 'contain'}} />
                        <FAIcons name='check' size={40} style={{color: 'green'}} />
                        <Image source={Images.activity.source} style={{width: 40, height: 40, resizeMode: 'contain'}} />
                        <FAIcons name='check' size={40} style={{color: 'green'}} />
                        <Image source={Images.water.source} style={{width: 40, height: 40, resizeMode: 'contain'}} />
                        <FAIcons name='check' size={40} style={{color: 'green'}} />
                    </View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.footerText}>
                            Congratulations! You Earned 6 Stickers Today
                        </Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff'
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 5
    },
    header: {
        color: '#ffffff',
        fontSize: 26,
        fontWeight: 'bold'
    },
    contentContainer: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5
    },
    footerText: {
        fontWeight: 'bold',
        color: '#ffffff'
    }
});