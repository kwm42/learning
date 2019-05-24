import React from 'react'
import './Battle.css'

class Battle extends React.Component{

    constructor(){
        super()
        this.state={
            playerOne: null,
            playerTwo: null
        }
    }

    render(){
        return (
            <div className="battle-wrapper">
                <div className="player">
                    <div>
                        <input type="text" placeholder="player one name here" ref="input1" />
                        <button onClick={ () => this.getUserInfo(1) }>confirm</button>
                        { this.state.playerOne ? (<img alt="" src={ this.state.playerOne && this.state.playerOne.avatar_url }/>) : <span />}
                    </div>
                </div>
                <div className="player">
                    <div>
                        <input type="text" placeholder="player two name here" ref="input2" />
                        <button onClick={ () => this.getUserInfo(2) }>confirm</button>
                        { this.state.playerTwo ? (<img alt="" src={ this.state.playerTwo && this.state.playerTwo.avatar_url }/>) : <span />}
                    </div>
                </div>
            </div>
        )
    }

    getUserInfo(index){
        let username
        username = (index === 1)?this.refs.input1.value : this.refs.input2.value
        fetch('https://api.github.com/users/'+username)
            .then(res => res.json())
            .then(data => {
                if(index === 1){
                    this.setState({
                        playerOne: data
                    })
                }else{
                    this.setState({
                        playerTwo: data
                    })
                }
            })
    }
}

export default Battle;