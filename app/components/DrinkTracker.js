import React, { Component } from 'react';

import {
  Text,
  View,
  Button,
  Modal,
} from 'react-native';
import SelectableList from './SelectableList';

import { DateAsStorageKey } from '../config/datetime'
import { PutProgress } from '../config/ProgressStorage'

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
            title: 'Select number of servings',
            style: {
                backgroundColor: "skyblue"
            },
            tintColor: "white"
         }
       };

    constructor(props) {
        super(props)
        this.drinks = 0
    }  

    _onChange = (data) => {
        this.drinks = data.reduce((acc, elem) => { return acc + elem.count }, 0)
    }

    _onNext = () => {
        // TODO account for water!
        if (this.drinks == 0)
        {
            alert("Great job! You get a sticker")
            const key = DateAsStorageKey()
            PutProgress(key, { "0" : true } )
        }
        else
        {
            alert("Sorry, no sticker today. Try drinking fewer sugary drinks tomorrow!")
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection:'row', backgroundColor: 'skyblue'}}>
                    <SelectableList data={data} onChange={this._onChange} onNext={this._onNext}/>
                </View>
            </View>
        )
    }
}