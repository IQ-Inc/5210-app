import React from 'react'
import {
	Text,
	View,
	TouchableHighlight,
} from 'react-native'

export default SelectableListRow = (props) => {

	const backgroundColor = (props.backgroundColor !== 'undefined') ? props.backgroundColor : '#000'

	return (
		<View style={{ backgroundColor:  backgroundColor, flexDirection: 'row' }}>
			<TouchableHighlight onPress={props.onClick} style={{ height: 30 }}>
				<Text>{ props.text }</Text>
			</TouchableHighlight>
		</View>
	)
}