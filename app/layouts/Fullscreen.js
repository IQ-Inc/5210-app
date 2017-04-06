import React from 'react'

import {
	Text,
	View,
	StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({

	fullScreen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	text: {
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold',
	},

	button: {
    marginTop: 20,
    borderColor: '#ffffff',
    borderRadius: 50,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5
  },

})

export default Fullscreen = (props) => {

	//
	// Required props
	//
	const text = props.text
	const next = props.nextNavigation
	const nav  = props.navigation

	//
	// Optional props
	//
	const backgroundColor = ("backgroundColor" in props)
												? props.backgroundColor
												: "#444444"

	const btnText = ("buttonText" in props)
								? props.buttonText
								: " >> "

	return (

		<View style={ [styles.fullScreen, { backgroundColor }] }>
			<Text>{ text }</Text>
			<TouchableOpacity onPress={ () => nav(next, { navigation: nav }) } >
          <View style={{flex: 1}} style={styles.button}>
              <Text>{ btnText }</Text>
          </View>
      </TouchableOpacity>
		</View>

	)
}