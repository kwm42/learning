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
                        <input type="text" placeholder="player one name here"/>
                        <button>confirm</button>
                        { this.state.playerOne ? (<img alt="" src={ this.state.playerOne && this.state.playerOne.avatar_url }/>) : <span />}
                    </div>
                </div>
                <div className="player">
                    <div>
                        <input type="text" placeholder="player one name here"/>
                        <button>confirm</button>
                        { this.state.playerOne ? (<img alt="" src={ this.state.playerOne && this.state.playerOne.avatar_url }/>) : <span />}
                    </div>
                </div>
            </div>
        )
    }
}

export default Battle;