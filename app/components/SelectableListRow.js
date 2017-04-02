import React from 'react'
import {
	Text,
	View,
	TouchableHighlight,
	Image,
} from 'react-native'

export default SelectableListRow = (props) => {

	const backgroundColor = (typeof props.backgroundColor !== 'undefined') ? props.backgroundColor : null

	const makeImg = (img) => {
		if (img === null || typeof img === 'undefined') return null
		return <Image source={img} style={{ height: 50, width: 50 }}/>
	}
	return (
		<View style={{ flex: 1, flexDirection: 'row' }}>
			<TouchableHighlight underlayColor='orange' onPress={props.onClick} style={{ backgroundColor: backgroundColor }}>
				<View>
					{makeImg(props.img)}
					<Text>{ props.text }</Text>
				</View>	
			</TouchableHighlight>
		</View>
	)
}