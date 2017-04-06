/*
	SelectableListRow
	A row component of a SelectableList. Shows the image and a text. When selected, the background is
	updated. SelectableListRow is a stateless component. State is managed in SelectableList.
 */

import React from 'react'
import {
	Text,
	View,
	TouchableOpacity,
	Image,
	Button,
  StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export const ROW_INCREMENT = "ROW_INCREMENT"
export const ROW_DECREMENT = "ROW_DECREMENT"

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 12,
    fontSize: 20,
    color: 'white',
    flex: 4,
  },

  image: {
    height: 128,
    width: 128,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },

  count: {
    paddingHorizontal: 10,
    fontSize: 28,
    color: 'white',
  },

  counters: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default SelectableListRow = (props) => {

	const makeImg = (img) => {
		if (img === null || typeof img === 'undefined') return null
		return <Image source={img} style={styles.image}/>
	}

	return (
		<View style={styles.row}>

			{makeImg(props.img)}

			<Text style={styles.text}>{ props.text.toUpperCase() }</Text>

      <View style={styles.counters}>
        <Icon name="minus" size={30} color='white' onPress={() => props.onClick(ROW_DECREMENT)} />

        <Text style={styles.count}>{ props.count }</Text>

        <Icon name="plus" size={30} color='white' onPress={() => props.onClick(ROW_INCREMENT)} />

      </View>

		</View>
	)
}