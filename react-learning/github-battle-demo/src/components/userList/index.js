import React from 'react'
import UserItem from '../userItem'
import './index.css'

class UserList extends React.Component{
    render(){
        let users = this.props.users
        users = users.map( (user, index) => {
            return <UserItem key={ index } user={ user }></UserItem>
        })

        return (
            <div>
                <h1>user list</h1>
                <ul className="user-list">
                    { users }
                </ul>
            </div>
        )
    }
}

export default UserList;