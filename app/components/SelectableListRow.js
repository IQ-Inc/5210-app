import React from 'react'
import {
	Text,
	View,
	TouchableHighlight,
} from 'react-native'

export default const SelectableListRow = (props) => {
	return (

		const backgroundColor = this.props.backgroundColor ? this.props.backgroundColor : "#000"

		<View style={{ flex: 1, backgroundColor:  backgroundColor }}>
			<TouchableHighlight onPress={() => this.props.onClick() }>
				<Text style={{ height: 50, flexDirection: 'row' }}>{ props.text }</Text>
			</TouchableHighlight>
		</View>
	)
}