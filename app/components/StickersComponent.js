import React, { Component } from 'react';

import {
  Text,
  View,
  Button
} from 'react-native';

export default class Stickers extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Text>Stickers: {this.props.count}</Text>
                <Button
                    title="Add sticker"
                    onPress = {this.props.addSticker}
                />
            </View>
        )
    }
}