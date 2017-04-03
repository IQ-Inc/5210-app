/*
	SelectableListRow

	A row component of a SelectableList. Shows the image and a text. When selected, the background is
	updated. SelectableListRow is a stateless component. State is managed in SelectableList.
 */

import React from 'react'
import {
	Text,
	View,
	TouchableHighlight,
	Image,
	Button
} from 'react-native'

export const ROW_INCREMENT = "ROW_INCREMENT"
export const ROW_DECREMENT = "ROW_DECREMENT"

export default SelectableListRow = (props) => {

	const makeImg = (img) => {
		if (img === null || typeof img === 'undefined') return null
		return <Image source={img} style={{ height: 50, width: 50 }}/>
	}

	return (
		<View style={{ flex: 1, flexDirection: 'row' }}>
			{makeImg(props.img)}
			<Text style={{ flex: 4 }}>{ props.text }</Text>
			<Button onPress={() => props.onClick(ROW_DECREMENT)}
					title="-" />
			<Text>{ props.count }</Text>
			<Button onPress={() => props.onClick(ROW_INCREMENT)}
					title="+" />
		</View>	
	)
}