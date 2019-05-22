import React from 'react'

class Profile extends React.Component{
    render(){
        return (
            <div>
                <h1>Profile param => { this.props.match.params.username }</h1>
            </div>
        )
    }

    componentDidMount(){
    }
}

export default Profile;