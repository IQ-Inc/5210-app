import React from 'react';
import {
    View,
    Image
} from 'react-native';
import AndroidTabBar from '../layouts/AndroidTabBar';
import Images from '../config/images';

const MainComponent = () => (
    <View style={{flex: 1}}>
    <View style={{height: 20, backgroundColor: 'powderblue'}} />
    <View style={{flex: 1, backgroundColor: 'powderblue', alignItems: 'center'}}>
      <Image source={Images.logo.source} style={Images.logo.style} />
    </View>
    <View style={{flex: 3}}><AndroidTabBar style={{backgroundColor: 'powderblue'}}/></View>
    </View>
);

export default MainComponent;