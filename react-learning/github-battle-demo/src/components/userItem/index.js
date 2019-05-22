import React from 'react'
import './index.css'

class UserItem extends React.Component{
    render(){
        let user = this.props.user

        return (
            <div className="user-item">
                {/* <a href={ user.html_url }> */}
                <a href={ '/profile/' + user.login }>
                    <img src={ user.avatar_url } alt="" className="avatar"/>
                </a>
                <a href={ user.html_url }>{ user.login }</a>
            </div>
        )
    }
}

export default UserItem;