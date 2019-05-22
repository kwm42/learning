import React from 'react'

class Loading extends React.Component{
    constructor(){
        super()
        this.state={
            text: 'loading',
            id: null
        }
    }

    render(){
        return (
            <div>
                <h1>{ this.state.text }</h1>
            </div>
        )
    }

    componentDidMount(){
        let id = setInterval( _ => {
            if (this.state.text === 'loading...'){
                this.setState({
                    text: 'loading'
                })
            } else {
                this.setState({
                    text: this.state.text + '.'
                })
            }
        }, 500);
        this.setState({
            id: id
        })
    }

    componentWillUnmount(){
        window.clearInterval(this.state.id)
    }
}

export default Loading;