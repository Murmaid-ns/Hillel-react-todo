import React, { Component } from 'react';
import './App.css';
import TodoFooter from './components/todo-footer/todo-footer.component';
import TodoForm from './components/todo-form/todo-form.component';
import TodoList from './components/todo-list/todo-list.component';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        text: 'Hi'
      },
      {
        id: 2,
        text: 'Todo 2'
      },
    ],
  }

  addTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="todo-app">
        <TodoForm addTodo={this.addTodo}/>

        <TodoList todos={todos}/>

        <TodoFooter />
      </div>
    );
  }
}

export default App;
