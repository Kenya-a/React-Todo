import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

import "./components/TodoComponents/Todo.css"

const todosData = [
  {
    task: '',
    id: Date.now(),
    completed: false
  },

];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
  }


  toggleItem = id => {
  console.log('working', id);

   this.setState({
      todos: this.state.todos.map(item => {
       if (item.id === id) {
         return {
            ...item,
           completed: !item.completed
         };
       } else {
         return item;
       }
      })
   });
  };


addTodo = todoName => {
  const newTodo = {
    task: todoName,
    id: Date.now(),
    completed: false,
  };
  this.setState({
    todos: [...this.state.todos, newTodo]
  });
}

clearCompleted = () => {
  this.setState({
    todos: this.state.todos.filter(item => item.completed === false),
  });
}
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo = {this.addTodo}/>
        <TodoList
          clearCompleted = {this.clearCompleted}
          todos = {this.state.todos}
          toggleItem = {this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
