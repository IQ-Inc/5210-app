import React, { Component } from 'react';

import {
  Text,
  View
} from 'react-native';
import SelectableList from './SelectableList';

const data = [
    { text: "soda"    , img: require("../images/drinks/soda.png") },
    { text: "water"  , img: require("../images/drinks/water.png") },
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