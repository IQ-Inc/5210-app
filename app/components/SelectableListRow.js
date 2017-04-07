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

  const step = (props.step !== null && typeof props.step !== 'undefined')
             ? props.step
             : 1
  const count = props.count

	return (
		<View style={styles.row}>

			{makeImg(props.img)}

			<Text style={styles.text}>{ props.text.toUpperCase() }</Text>

      <View style={styles.counters}>
        <Icon name="minus" size={30} color='white' onPress={() => props.onClick(count > 0 ? count - step : count)} />

        <Text style={styles.count}>{ count }</Text>

        <Icon name="plus" size={30} color='white' onPress={() => props.onClick(count + step)} />

      </View>

		</View>
	)
}