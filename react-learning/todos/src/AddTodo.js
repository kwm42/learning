import React from 'react'

class AddTodo extends React.Component{
    render(){
        return (
            <div>
                <form>
                    <input id="newTodo" type="text" className="validate" onChange={this.handleSubmit}/>
                    <label className="active" htmlFor="newTodo">New Todo:</label>
                </form>
            </div>
        )
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }
}

export default AddTodo