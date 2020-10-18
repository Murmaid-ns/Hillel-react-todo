import React from 'react';
import './todo-form.styles.scss';

class TodoForm extends React.Component {
  state = {
    inputText: '',
  }

  handleTodo = (e) => {
    const { addTodo } = this.props;

    e.preventDefault();
    
    addTodo({
      id: Math.random(),
      text: this.state.inputText,
    });

    this.setState({ inputText: '' })
  }

  render() {
    return (
      <header>
        <form onSubmit={this.handleTodo}>
          <input value={this.state.inputText} onChange={(e) => this.setState({ inputText: e.target.value })} />
          <button>Add todo</button>
        </form>
      </header>
    )
  }
};

export default TodoForm;
