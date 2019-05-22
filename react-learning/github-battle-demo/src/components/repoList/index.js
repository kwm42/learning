import React from 'react'
import RepoItem from '../repoItem'
import './index.css'

class RepoList extends React.Component{
    render(){
        let repos = this.props.repos
        repos = repos.map( (repo, index) => {
            return (
                <RepoItem key={ index } repo={ repo } className="grid-item"/>
            )
        })

        return (
            <div>
                <h1>List here</h1>
                <ul className="grid-wrapper">
                    { repos }
                </ul>
            </div>
        )
    }
}

export default RepoList;