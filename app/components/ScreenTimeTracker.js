import React, { Component } from 'react';

import {
  Text,
  View,
  Button
} from 'react-native';
import SelectableList from './SelectableList';

const data = [
  { text: "computer"    , img: require("../images/screens/computer.png") },
  { text: "phone"    , img: require("../images/screens/phone.png") },
  { text: "tablet"    , img: require("../images/screens/tablet.png") },
  { text: "TV"    , img: require("../images/screens/TV.png") },
  { text: "video games"    , img: require("../images/screens/video games.png") },
]

export default class Settings extends Component {
 static navigationOptions = {
        header : {
        title: 'Select minutes of screen time',
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
    if ( this.minutes <= 120 ) {
      alert("Keep off that screen! You get a sticker")
    } else {
      alert("Oh no, too much screen time! No sticker today wahhhh :( ")
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, flexDirection:'row', backgroundColor: 'skyblue'}}>
          <SelectableList data={data}
                          onChange={this._onChange}
                          step={15}
                          onNext={this._onNext}/>
        </View>
      </View>
      )
  }
}