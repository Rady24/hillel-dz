import './App.css';

import React, { Component } from 'react';
import List from '../List/List';
import Form from '../Form/Form';

class App extends Component {
  state = {
    list: [
      {id:1, title: 'Item10', isDone: false},
      {id:2, title: 'Item20', isDone: true},
      {id:3, title: 'Item30', isDone: false},
    ],
  };
  toggleTodo = (id) => {
    this.setState ({
      list: this.state.list.map((item) => item.id !== id ? item : {
        ...item,
        isDone: !item.isDone,
      })
    })
  }
  deleteTodo = (id) => {
    this.setState ({
      list: this.state.list.filter((item) => item.id !== id),
    })
  }
  addTodo = (newTodo) => {
    this.setState({
      list: [
        ...this.state.list,
        {...newTodo, id: Date.now(), isDone: false}
      ]
    })
  }
  render (){
    return(
      <>
      <List
      list = {this.state.list}
      onToggle={this.toggleTodo}
      onDelete={this.deleteTodo}
      />
      <Form
      onSave = {this.addTodo}/>
      </>
    )
  }
}


export default App;
