/**
 * SelectableList
 *
 * Creates instances of SelectableListRows based on a data property. The input list should
 * have the form
 * 
 * 		[ { text: string, img?: ?string }... ] 		
 *
 * On click, the item in the list is highlighted, indicating that the item was selected. On
 * click again, the item is deselected.
 * 
 * Provide a callback, onSelection(idx, total), to be informed when an item at index idx is
 * selected, and the total number of selected items.
 */

import React from 'react'
import {
	ListView, 
	Text, 
	View
} from 'react-native';

import SelectableListRow from './SelectableListRow'

export default class SelectableList extends React.Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    props.data.forEach( (elem, idx) => {
    	elem['idx'] = idx
    	elem['selected'] = false
    })

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
  	const selected = data[idx].selected

  	// We need to replace the whole *object*, not just the field
  	// in the object, for the ListView magic to notic and
  	// re-render the view...
  	data[idx] = {
  		...this.state.data[idx],
  		selected: !selected
  	}

  	const dataSource = this.state.dataSource.cloneWithRows(data)
  	this.setState({
  		data: data,
  		dataSource: dataSource
  	})
  }

  render() {

  	const intoRow = (row) => {
  		const bgcolor = row.selected ? 'red' : null
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

