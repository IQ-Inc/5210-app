/*
	SelectableList
	Creates instances of SelectableListRows based on a data property list. The input list should
	have the form
			[ { text: string, img?: require("path/to/img") }... ]

    Example:

		const data = [
		    { text: "apples"    , img: require("../images/foods/apples.png") },
		    { text: "cherries"  , img: require("../images/foods/cherries.png") },
		    { text: "bananas"   , img: require("../images/foods/bananas.png") },
		    { text: "It is OK to have no image!" },
		    { text: "grapes"    , img: require("../images/foods/grapes.png") }
		]
	  	class MyComponent extends React.Component {

			constructor(props) {
				super(props)
				this.state = { count: 0 }
			}

      //
      // onSelection can be registered, and it receives
      // a callback when a row, identified by index, is
      // changed to a new count of count
      //
			onSelection(index, count) {
				alert(data[index].text)
				const newCount = totalCount
				this.setState({ count: newCount })
			}

			render() {
				return (
					<View>
						<Text>{this.state.count}</Text>
						<SelectableList data={data} onSelection={this.onSelection}/>
					</View
				)
			}
  	}
 */

import React from 'react'
import {
	ListView,
	Text,
	View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import SelectableListRow from './SelectableListRow'

const styles = StyleSheet.create({
  button: {
    borderColor: '#ffffff',
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "steelblue"
  },
  text: {
    color: '#ffffff',
    fontSize: 50,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export default class SelectableList extends React.Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    props.data.forEach( (elem, idx) => {
    	elem['idx'] = idx
      elem['count'] = 0
    })

    this.onSelection = (idx, total) => { null }
    if ( props.onSelection !== null && ( typeof props.onSelection ) !== 'undefined' )
    	this.onSelection = props.onSelection

    this.onChange = (arr) => { null }
    if ( props.onChange !== null && typeof props.onChange !== 'undefined' )
      this.onChange = props.onChange

    this.state = {
      data: props.data,
      dataSource: ds.cloneWithRows(props.data)
    };
  }

  /**
   * Render row separators
   */
  _renderSeparator(sectionID, rowID, adjacentClicked) {
  	return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: 2,
          backgroundColor: 'white',
        }}
      />
    )
  }

  /**
   * Handle click events on the -/+ buttons in rows.
   * Redraw the rows, if necessary.
   */
  _handleClick(idx, count) {

    this.onSelection(idx, count)

  	const data = this.state.data.slice()

  	// We need to replace the whole *object*, not just the field
  	// in the object, for the ListView magic to notic and
  	// re-render the view...
  	data[idx] = {
  		...this.state.data[idx],
  		count: count
  	}

    this.onChange( data )
    
  	const dataSource = this.state.dataSource.cloneWithRows(data)

  	this.setState({
  		data: data,
  		dataSource: dataSource
  	})
  }

  render() {

  	const intoRow = (row) => {
  		return <SelectableListRow text={row.text}
                                count={row.count}
                                img={row.img} 
                                onClick={ (action) => this._handleClick(row.idx, action) }
                                step={this.props.step} />
  	}

    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={intoRow}
          renderSeparator={this._renderSeparator}
          style={{...this.props.style}}
        />
        <TouchableOpacity onPress={this.props.onNext} >
          <View style={{flex: 1}} style={styles.button}>
              <Text style={styles.text}>{"LOG"}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )

  } // render

} // SelectableList