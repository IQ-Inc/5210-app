import React, { Component } from 'react';

import {
  Text,
  View
} from 'react-native';
import SelectableList from './SelectableList';

const data = [
    { text: "apples"    , img: require("../images/foods/apple.png") },
    { text: "cherries"  , img: require("../images/foods/cherries.png") },
    { text: "bananas"   , img: require("../images/foods/banana.png") },
    { text: "grapes"    , img: require("../images/foods/grapes.png") }
]

export default class Settings extends Component {
    static navigationOptions = {
         header : {
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
                    <SelectableList data={data} onSelection={this.onSelection} />
                </View>
            </View>
        )
    }
}