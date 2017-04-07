import React, { Component } from 'react';

import {
  Text,
  View
} from 'react-native';
import SelectableList from './SelectableList';

const data = [
    { text: "iced tea"    , img: require("../images/drinks/iced tea.png") },
    { text: "juice"  , img: require("../images/drinks/juice.png") },
    { text: "juice box"  , img: require("../images/drinks/juicebox.png") },
    { text: "lemonade"  , img: require("../images/drinks/lemonade.png") },
    { text: "soda"  , img: require("../images/drinks/soda.png") },
    { text: "sports drink"  , img: require("../images/drinks/sports drink.png") },
    { text: "water"  , img: require("../images/drinks/water.png") },
]

export default class Settings extends Component {
 static navigationOptions = {
         header : {
            title: '0 sugary drinks & more water',
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