import React, { Component } from 'react';

import {
  Text,
  View,
} from 'react-native';

export default class Home extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection:'row', backgroundColor: 'skyblue'}}>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text>5</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text>2</Text>
                    </View>
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