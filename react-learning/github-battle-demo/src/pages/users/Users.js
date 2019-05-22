import React from 'react'
import Loading from '../../components/loading'
import UserList from '../../components/userList'

class Users extends React.Component{
    constructor(){
        super()
        this.state={
            search: null,
            users: null
        }
    }

    render(){
        return (
            <div>
                { this.state.users?
                <UserList users={ this.state.users }/>:
                <Loading /> }
            </div>
        )
    }

    fetchTopUsers(){
        let search = this.state.search
        fetch('https://api.github.com/search/users?q='+ ( search?search+'+':'' ) +'repos:%3E42+followers:%3E1000&order=desc')
            .then( res => res.json() )
            .then( data => {
                this.setState({
                    users: data.items
                })
            })
    }

    componentWillMount(){
        this.fetchTopUsers()
    }
}

export default Users;