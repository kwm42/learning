import React from 'react'

class Todos extends React.Component {
    render() {
        let {todos} = this.props
        let todoList = ( todos && todos.length > 0) ? 
        (
            todos.map(todo => {
                return (
                    <li key={todo.id} className="collection-item" onClick={() => this.handleDelete(todo.id)}>
                        { todo.content }
                    </li>
                )
            })
        ) :  (
            <li className="collection-item"><h5>You have no todos~~ YAHOO!!</h5></li>
        )

        return (
            <ul className="collection with-header">
                { todoList }
            </ul>
        )
    }
    handleDelete(id){
        this.props.deleteTodo(id)
    }
}

export default Todos;