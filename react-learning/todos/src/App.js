import React from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      todos: [
        {content:'buy fruits',time:'2019-01-01 09:00:00',id:1},
        {content:'buy books',time:'2019-01-11 09:00:00',id:2},
      ]
    }
  }
  deleteTodo = (id) => {
    let newTodos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: newTodos
    })
  }
  render(){
    return (
      <div className="App row">
        <h1 className="center-align light-blue-text">TODOS</h1>
        <div className="col s6 offset-s3">
          <Todos todos={this.state.todos} className="center-align" deleteTodo={this.deleteTodo}/>
          <AddTodo />
        </div>
      </div>
    )
  }
}

export default App;
