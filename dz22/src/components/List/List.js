import React, { Component } from 'react'
import ListItem from '../ListItem/ListItem'

export class List extends Component {
  render() {
    return (
        <ul>
            {this.props.list.map((item) => {
              return <ListItem
              key= {item.id}
              todo = {item}
              onToggle = {this.props.onToggle}
              onDelete={this.props.onDelete}
               />
            })}
        </ul>
    )
  }
}

export default List

/* <li key={item.id}>{item.title}</li> */