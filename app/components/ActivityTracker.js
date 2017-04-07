import React, { Component } from 'react';

import {
  Text,
  View,
  Button
} from 'react-native';
import SelectableList from './SelectableList';

import { DateAsStorageKey } from '../config/datetime'
import { PutProgress } from '../config/ProgressStorage'

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
    { text: "other"   , img: require("../images/activities/other.png") },

]

export default class Settings extends Component {
 static navigationOptions = {
         header : {
            title: 'Select minutes of activity',
            style: {
                backgroundColor: "skyblue"
            },
            tintColor: "white"
         }
       };

    constructor(props) {
        super(props)
        this.minutes = 0
    }

    _onChange = (data) => {
        this.minutes = data.reduce((acc, elem) => { return acc + elem.count }, 0)
    }

    _onNext = () => {
        if ( this.minutes >= 60 )
        {
            alert("Wow you're active! You get a sticker")
            const key = DateAsStorageKey()
            PutProgress( key, { "1" : true } )
        }
        else
        {
            alert("That wasn't 60 minutes! Play outside tomorrow to get a sticker!")
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection:'row', backgroundColor: 'skyblue'}}>
                    <SelectableList data={data}
                                    onChange={this._onChange}
                                    step={15}
                                    onNext={this._onNext} />
                </View>
            </View>
        )
    }
}