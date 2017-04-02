import React from 'react'
import {
	Text,
	View,
	TouchableHighlight,
} from 'react-native'

export default SelectableListRow = (props) => {

	const backgroundColor = (props.backgroundColor !== 'undefined') ? props.backgroundColor : null

	return (
		<View style={{ flex: 1, flexDirection: 'row' }}>
			<TouchableHighlight underlayColor='orange' onPress={props.onClick} style={{ backgroundColor: backgroundColor }}>
				<Text>{ props.text }</Text>
			</TouchableHighlight>
		</View>
	)
}