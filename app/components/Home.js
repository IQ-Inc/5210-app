import React, { Component } from 'react';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Text,
  View,
} from 'react-native';

export default class Home extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection:'row', backgroundColor: 'skyblue'}}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <MCIcons
                            name="food-apple"
                            size={100}
                            color="white"
                            onPress = {() => navigate('FoodTracker')}
                            />
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