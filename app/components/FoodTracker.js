import React, { Component } from 'react';

import {
  Text,
  View,
  Button
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
            title: 'Select number of servings',
            style: {
                backgroundColor: "skyblue"
            },
            tintColor: "white",
         }
       };

    constructor(props) {
        super(props)
        this.servings = 0
    }

    _onChange = (data) => {
        this.servings = data.reduce((acc, elem) => { return acc + elem.count }, 0)
    } 

    _onNext = () => {
        if ( this.servings >= 5 ) {
            alert("Nom nom nom! You get a sticker")
        } else {
            alert("Eat 5 servings tomorrow to get a sticker!")
        }
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection:'row', backgroundColor: 'skyblue'}}>
                    <SelectableList data={data} onChange={this._onChange}
                        onNext={this._onNext}/>
                </View>
            </View>
        )
    }
}