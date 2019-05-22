import React from 'react'
import './index.css'

class RepoItem extends React.Component{
    render(){
        return (
            <div className="grid-item">
                <h3>{ this.props.repo.full_name }</h3>
                <img src={ this.props.repo.owner.avatar_url } alt="" className="avatar"/>
                <p>{ this.props.repo.description }</p>
                <p>{ this.props.repo.created_at }</p>
                <a href={ this.props.repo.html_url }>{ this.props.repo.url }</a>
            </div>
        )
    }
}

export default RepoItem;