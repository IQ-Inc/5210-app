import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Images from '../config/images';

export default class Home extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection:'row', backgroundColor: 'powderblue'}}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
                        <TouchableOpacity activeOpacity={0.5} onPress = {() => navigate('FoodTracker')}>
                            <Image source={Images.foodTracker.source} style={Images.foodTracker.style} />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity activeOpacity={0.5} onPress = {() => navigate('ScreenTimeTracker')}>
                            <Image source={Images.screenTime.source} style={Images.screenTime.style} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection:'row', backgroundColor: 'powderblue'}}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity activeOpacity={0.5} onPress = {() => navigate('ActivityTracker')}>
                            <Image source={Images.activity.source} style={Images.activity.style} />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity activeOpacity={0.5} onPress = {() => navigate('DrinkTracker')}>
                            <Image source={Images.water.source} style={Images.water.style} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}