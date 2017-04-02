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
    { text: "noimage is OK to have, need to work on spacing..." },
    { text: "grapes"    , img: require("../images/foods/cherries.png") }
]

export default class Home extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection:'row', backgroundColor: 'skyblue'}}>
                    <SelectableList data={data}/>
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