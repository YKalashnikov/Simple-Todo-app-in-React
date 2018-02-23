import React, { Component } from 'react';
import './App.css';


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  padding: '13px'
};


const Todo = props => (
  <li>
    <input type="checkbox" checked={props.todo.checked} onChange={props.toggele} />
    <button onClick={props.delete}>Delete</button>
    <span>{props.todo.text}</span>
  </li>
)
let id = 0;
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
    }
  }
  addTodo() {
    const text = prompt("ToDo text please!")
    this.setState({
      todos: [...this.state.todos, { id: id++, text: text, checked: false }],
    })
  }
  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }
  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id)
          return todo
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        }

      })


    })
  }

  render() {
    return (
      <div className="container">
      <div>Todo Count:{this.state.todos.length}</div>
      <div>Unchecked todo count:{this.state.todos.filter(todo =>!todo.checked).length}</div>
        <button onClick={() => this.addTodo()}>Add To Do</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo
              toggele={() => this.toggleTodo(todo.id)}
              delete={() => this.removeTodo(todo.id)}
              todo={todo}
            />))}
        </ul>
      </div>
    )

  }
}

export default App;
