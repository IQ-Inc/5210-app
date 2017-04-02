/*
	SelectableList

	Creates instances of SelectableListRows based on a data property list. The input list should
	have the form

			[ { text: string, img?: require("path/to/img") }... ] 		

	On click, the item in the list is highlighted, indicating that the item was selected. On
	click again, the item is deselected.

	Optionally provide a callback, onSelection(idx, total), to be informed when an item at index idx is
	selected, and the total number of selected items.
  
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

			onSelection(index, totalCount) {
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
	View
} from 'react-native';

import SelectableListRow from './SelectableListRow'

export default class SelectableList extends React.Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    props.data.forEach( (elem, idx) => {
    	elem['idx'] = idx
    	elem['selected'] = false
    })

    this.onSelection = (idx, total) => { null }
    this.count = 0
    if ( props.onSelection !== null && ( typeof props.onSelection ) !== 'undefined' )
    	this.onSelection = props.onSelection

    this.state = {
      data: props.data,
      dataSource: ds.cloneWithRows(props.data)
    };
  }

  _renderSeparator(sectionID, rowID, adjacentClicked) {
  	return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: 1,
          backgroundColor: '#000',
        }}
      />
    )
  }

  _handleClick(idx) {

  	const data = this.state.data.slice()
  	const selected = !data[idx].selected

  	const count = selected ? this.count + 1 : this.count - 1
  	this.onSelection(idx, count)
  	this.count = count

  	// We need to replace the whole *object*, not just the field
  	// in the object, for the ListView magic to notic and
  	// re-render the view...
  	data[idx] = {
  		...this.state.data[idx],
  		selected: selected
  	}

  	const dataSource = this.state.dataSource.cloneWithRows(data)
  	this.setState({
  		data: data,
  		dataSource: dataSource
  	})
  }

  render() {

  	const intoRow = (row) => {
  		const bgcolor = row.selected ? '#DDDDDD' : null
  		return <SelectableListRow text={row.text} backgroundColor={bgcolor} img={row.img} onClick={ () => this._handleClick(row.idx) }/>
  	}

    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={intoRow}
          renderSeparator={this._renderSeparator}
          style={{...this.props.style}}
        />
      </View>
    )

  } // render

} // SelectableList

