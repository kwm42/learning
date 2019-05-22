import React from 'react'
// import Loading from '../../components/loading'
import './Profile.css'

class Profile extends React.Component{
    constructor(){
        super()
        this.state={
            user: null,
            repos: null
        }
    }

    render(){
        let user = this.state.user
        let repos = this.state.repos
        if(repos !== null ){
            repos = repos.map( (repo, index) => {
                return (
                    <li key={ index } className="repo-list-item">
                        <a href={ repo.html_url }>{ repo.full_name }</a>
                        <span>{ repo.language }</span>
                        <span>{ repo.description }</span>
                        <span><strong>forks: </strong>{ repo.forks_count }</span>
                        <span><strong>created at: </strong>{ repo.created_at }</span>
                        <span><strong>watcher count: </strong>{ repo.watchers_count }</span>
                    </li>
                )
            })
        }

        return (
            <div className="profile-wrapper">
                <h1>{ this.props.match.params.username }</h1>
                {user && 
                <div>
                    <div className="left">
                        <img src={ user.avatar_url } alt=""/>
                        <a href={ user.html_url } >{ user.html_url }</a>
                        <ul>
                            <li>company: { user.company }</li>
                            <li>location: { user.location }</li>
                            <li>blog: <a href={ user.blog }>{ user.blog }</a></li>
                            <li>company: { user.company }</li>
                            <li>create date: { user.created_at }</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            { repos }
                        </ul>
                    </div>
                </div>
                }
            </div>
        )
    }

    componentDidMount(){
        fetch('https://api.github.com/users/' + this.props.match.params.username)
            .then(res => res.json() )
            .then(data => {
                this.setState({
                    user: data
                })
            })
            .then( _ => {
                this.fetchRepos()
            })
    }

    fetchRepos(){
        fetch(this.state.user.repos_url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    repos: data
                })
            })
    }
}

export default Profile;