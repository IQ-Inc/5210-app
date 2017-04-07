import React, { Component } from 'react';

import {
  Text,
  View
} from 'react-native';
import SelectableList from './SelectableList';

const data = [
    { text: "computer"    , img: require("../images/screens/computer.png") },
    { text: "phone"    , img: require("../images/screens/phone.png") },
    { text: "tablet"    , img: require("../images/screens/tablet.png") },
    { text: "TV"    , img: require("../images/screens/TV.png") },
    { text: "video games"    , img: require("../images/screens/video games.png") },
    ]

export default class Settings extends Component {
 static navigationOptions = {
         header : {
            title: '< 2 hours of screen time',
            style: {
                backgroundColor: "skyblue"
            },
            tintColor: "white"
         }
       };
       
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection:'row', backgroundColor: 'skyblue'}}>
                    <SelectableList data={data}
                                    onSelection={this.onSelection}
                                    step={15}/>
                </View>
            </View>
        )
    }
}