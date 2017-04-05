import React, { Component } from 'react';

import {
 Text,
 View,
 Image,
 AsyncStorage,
 Platform
} from 'react-native';

import IosTabBar from '../layouts/IosTabBar';
import AndroidTabBar from '../layouts/AndroidTabBar';
import Images from '../config/images';
import Onboarding from '../layouts/Onboarding';

export default class Main extends Component {

   static navigationOptions = {
     header : {
        visible: false,
     }
   };

   constructor(props) {
    super(props);

    this.state = {
      onboard_complete: false
    }
  }

  componentWillMount() {
    AsyncStorage.getItem('@5210App:onboard_complete')
                .then(onboard_complete => {
                  onboard_complete = JSON.parse(onboard_complete);
                  this.setState({onboard_complete});
                })
                .catch(err => {
                  console.error("Unable to get key onboard_complete", err);
                });
  }

  render() {
    if (!this.state.onboard_complete) {
      return(<Onboarding navigation={this.props.navigation} />);
    }
    else {
      return(
        <View style={{flex: 1}}>
          <View style={{height: 20, backgroundColor: 'powderblue'}} />
            <View style={{flex: 1, backgroundColor: 'powderblue', alignItems: 'center'}}>
              <Image source={Images.logo.source} style={Images.logo.style} />
            </View>
          <View style={{flex: 3}}>
            {
              (Platform.OS == 'ios')
              ? <IosTabBar navigation={this.props.navigation} />
              : <AndroidTabBar style={{backgroundColor: 'powderblue'}} navigation={this.props.navigation} />
              }
          </View>
        </View>
      );
    }
  }
}