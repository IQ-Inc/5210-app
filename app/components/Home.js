import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Alert
} from 'react-native';
import Images from '../config/images';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { GetProgress } from '../config/ProgressStorage'
import { DateAsStorageKey } from '../config/datetime'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            helpDisplayed: false
        }
         this.onButtonPress = this.onButtonPress.bind(this);
    }

    onButtonPress(){
        this.setState({
           helpDisplayed: !this.state.helpDisplayed
        });
      }


    render() {
        const { navigate } = this.props.navigation;

        //
        // Local storage debug here
        // TODO remove me :)
        //
        const key = DateAsStorageKey()
        GetProgress(key, (progress) => console.log(progress))

        if (!this.state.helpDisplayed){
            return (
                <View style={{flex: 1}}>
                    <View style={{flex: 7, flexDirection:'row', backgroundColor: 'powderblue'}}>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
                            <TouchableOpacity activeOpacity={0.5} onPress = {() => navigate('FoodTracker', {navigation: this.props.navigation})}>
                                <Image source={Images.foodTracker.source} style={Images.foodTracker.style} />
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <TouchableOpacity activeOpacity={0.5} onPress = {() => navigate('ScreenTimeTracker')}>
                                <Image source={Images.screenTime.source} style={Images.screenTime.style} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex: 7, flexDirection:'row', backgroundColor: 'powderblue'}}>
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
                    <View style={{flex: 1, flexDirection:'row', backgroundColor: 'powderblue'}}>
                        <View style={{flex: 1}} >
                            <Button title="Learn More"
                                    onPress ={this.onButtonPress}
                            />
                        </View>
                    </View>
                </View>
            )
        }
        else {
          return (
              <View style={{flex: 1}}>
                  <View style={{flex: 7, flexDirection:'row', backgroundColor: 'powderblue'}}>
                      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
                          <TouchableOpacity activeOpacity={0.5} onPress = {() => navigate('FoodTracker')}>
                              <Image source={Images.five.source} style={Images.five.style} />
                          </TouchableOpacity>
                      </View>
                      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                          <TouchableOpacity activeOpacity={0.5} onPress = {() => navigate('ScreenTimeTracker')}>
                              <Image source={Images.two.source} style={Images.two.style} />
                          </TouchableOpacity>
                      </View>
                  </View>
                  <View style={{flex: 7, flexDirection:'row', backgroundColor: 'powderblue'}}>
                      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                          <TouchableOpacity activeOpacity={0.5} onPress = {() => navigate('ActivityTracker')}>
                              <Image source={Images.one.source} style={Images.one.style} />
                          </TouchableOpacity>
                      </View>
                      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                          <TouchableOpacity activeOpacity={0.5} onPress = {() => navigate('DrinkTracker')}>
                              <Image source={Images.zero.source} style={Images.zero.style} />
                          </TouchableOpacity>
                      </View>
                  </View>
                  <View style={{flex: 1, flexDirection:'row', backgroundColor: 'powderblue'}}>
                      <View style={{flex: 1}} >
                          <Button title="Close help"
                                  onPress ={this.onButtonPress}
                          />
                      </View>
                  </View>
              </View>
          )
        }
    }
}