import React, { Component } from 'react';

import {
  Text,
  View,
} from 'react-native';

import SelectableList from './SelectableList'

const data = [
    { text: "apples"    , img: require("../images/foods/cherries.png") },
    { text: "cherries"  , img: require("../images/foods/cherries.png") },
    { text: "bananas"   , img: require("../images/foods/cherries.png") },
    { text: "grapes"    , img: require("../images/foods/cherries.png") }
]

export default class Home extends Component {

    onSelection(idx, total) {
        // alert(total)
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection:'row', backgroundColor: 'skyblue'}}>
                    <SelectableList data={data} onSelection={this.onSelection} />
                </View>
                <View style={{flex: 1, flexDirection:'row', backgroundColor: 'steelblue'}}>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text>1</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text>0</Text>
                    </View>
                </View>
            </View>
        )
    }
}