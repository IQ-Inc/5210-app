import React, { Component } from 'react';

import {
  Text,
  View
} from 'react-native';
import SelectableList from './SelectableList';

const data = [
    { text: "artichoke"    , img: require("../images/foods/artichoke.png") },
    { text: "asparagus"  , img: require("../images/foods/asparagus.png") },
    { text: "avocado"   , img: require("../images/foods/avocado.png") },
    { text: "banana"    , img: require("../images/foods/banana.png") },
    { text: "beet"    , img: require("../images/foods/beet.png") },
    { text: "blackberries"    , img: require("../images/foods/blackberries.png") },
    { text: "blueberries"    , img: require("../images/foods/blueberries.png") },
    { text: "broccoli"    , img: require("../images/foods/broccoli.png") },
    { text: "cabbage"    , img: require("../images/foods/cabbage.png") },
    { text: "carrot"    , img: require("../images/foods/carrot.png") },
    { text: "grapes"    , img: require("../images/foods/grapes.png") },
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