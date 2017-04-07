import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  AsyncStorage
} from 'react-native';
import Images from '../config/images';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { GetProgress } from '../config/ProgressStorage'
import { DateAsStorageKey } from '../config/datetime'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            helpDisplayed: false,
            five: 'foodTracker',
            two: 'screenTime',
            one: 'activity',
            zero: 'water',
            buttonText: 'Learn more'
        };
        this.onButtonPress = this.onButtonPress.bind(this);
    }

    onButtonPress(){
        if (!this.state.helpDisplayed){
            this.setState({
                helpDisplayed: !this.state.helpDisplayed,
                five: this.state.five + '_info',
                two: this.state.two + '_info',
                one: this.state.one + '_info',
                zero: this.state.zero + '_info',
                buttonText: 'Close help'
            });
        }
        else {
            this.setState({
                helpDisplayed: !this.state.helpDisplayed,
                five: 'foodTracker',
                two: 'screenTime',
                one: 'activity',
                zero: 'water',
                buttonText: 'Learn more'
            })
        }
      }

    componentWillMount() {
        var today = new Date();
        var todayFormatted = (today.getMonth()+1).toString()+today.getDate().toString()+today.getFullYear().toString();

        AsyncStorage.getItem('@5210App:'+todayFormatted)
            .then(todayFormatted => {
                todayFormatted = JSON.parse(todayFormatted);
                this.setState({todayFormatted})
            })
            .catch(err => {
                console.error("Unable to get key" + todayFormatted, err);
            })

    }
    render() {
        const { navigate } = this.props.navigation;
        //
        // Local storage debug here
        // TODO remove me :)
        //
        const key = DateAsStorageKey()
        GetProgress(key, (progress) => console.log(progress));

        return (
            <View style={{flex: 1}}>
                <View style={{flex: 7, flexDirection:'row', backgroundColor: 'powderblue'}}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
                        <TouchableOpacity activeOpacity={0.5} onPress = {() => navigate('FoodTracker', {navigation: this.props.navigation})}>
                            <Image source={Images[this.state.five].source} style={Images[this.state.five].style} />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity activeOpacity={0.5} onPress = {() => navigate('ScreenTimeTracker')}>
                            <Image source={Images[this.state.two].source} style={Images[this.state.two].style} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex: 7, flexDirection:'row', backgroundColor: 'powderblue'}}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity activeOpacity={0.5} onPress = {() => navigate('ActivityTracker')}>
                            <Image source={Images[this.state.one].source} style={Images[this.state.one].style} />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity activeOpacity={0.5} onPress = {() => navigate('DrinkTracker')}>
                            <Image source={Images[this.state.zero].source} style={Images[this.state.zero].style} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection:'row', backgroundColor: 'powderblue'}}>
                    <View style={{flex: 1}} >
                        <Button title={this.state.buttonText}
                                onPress ={this.onButtonPress}
                        />
                    </View>
                </View>
            </View>
        )
    }
}