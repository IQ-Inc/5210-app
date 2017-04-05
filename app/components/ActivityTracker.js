import React, { Component } from 'react';

import {
  Text,
  View
} from 'react-native';
import SelectableList from './SelectableList';

const data = [
    { text: "walking"    , img: require("../images/activities/walking.png") },
    { text: "biking"  , img: require("../images/activities/biking.png") },
    { text: "yoga"   , img: require("../images/activities/yoga.png") },
    { text: "hiking"   , img: require("../images/activities/hiking.png") },
    { text: "dancing"   , img: require("../images/activities/dancing.png") },
    { text: "jump rope"   , img: require("../images/activities/jumprope.png") },
    { text: "basketball"   , img: require("../images/activities/basketball.png") },
    { text: "football"   , img: require("../images/activities/football.png") },
    { text: "running"   , img: require("../images/activities/running.png") },
    { text: "skateboarding"   , img: require("../images/activities/skateboarding.png") },
    { text: "soccer"   , img: require("../images/activities/soccer.png") },
    { text: "swimming"   , img: require("../images/activities/swimming.png") },
    { text: "tag"   , img: require("../images/activities/tag.png") },
]

export default class Settings extends Component {
 static navigationOptions = {
         header : {
            title: '1 hour + of physical activity',
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