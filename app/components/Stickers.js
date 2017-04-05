import React, { Component } from 'react';

import {
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import Images from '../config/images';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Stickers extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                 <View style={{flex: 1, flexDirection:'row'}}>
                   <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                   </View>
                  <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <View style={{flex: 1}}></View>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                               <MCIcons name="checkbox-blank-circle"
                                        size= {10}
                                        color="blue"/>
                                <Text>  11</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                <MCIcons name="star"
                                         size= {15}
                                         color="yellow"/><Text>  2</Text>
                            </View>
                  </View>
                </View>
                <View style={{flex: 8}}>
                    <View style={{flex: 1, flexDirection:'row'}}>
                       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Image source={Images.dogSticker.source} style={Images.dogSticker.style} />
                       </View>
                       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                           <Image source={Images.lionSticker.source} style={Images.lionSticker.style} />
                      </View>
                      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                          <Image source={Images.rabbitSticker.source} style={Images.rabbitSticker.style} />
                      </View>
                      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                         <Image source={Images.mouseSticker.source} style={Images.mouseSticker.style} />
                      </View>
                    </View>
                    <View style={{flex: 1, flexDirection:'row'}}>
                       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Image source={Images.hamsterSticker.source} style={Images.hamsterSticker.style} />
                       </View>
                       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                           <Image source={Images.squirrelSticker.source} style={Images.squirrelSticker.style} />
                      </View>
                      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                          <Image source={Images.hedgehogSticker.source} style={Images.hedgehogSticker.style} />
                      </View>
                      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                         <Image source={Images.turtleSticker.source} style={Images.turtleSticker.style} />
                      </View>
                    </View>
                    <View style={{flex: 1, flexDirection:'row'}}>
                       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Image source={Images.elephantSticker.source} style={Images.elephantSticker.style} />
                       </View>
                       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                           <Image source={Images.giraffeSticker.source} style={Images.giraffeSticker.style} />
                      </View>
                      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                          <Image source={Images.beeSticker.source} style={Images.beeSticker.style} />
                      </View>
                      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                      </View>
                    </View>
                    <View style={{flex: 1, flexDirection:'row'}}>
                       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                       </View>
                       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                      </View>
                      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                      </View>
                      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                      </View>
                    </View>
                </View>
            </View>
        )
    }
}