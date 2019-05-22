import React from 'react'
// import Loading from '../../components/loading'

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
                    <li key={ index }>{ repo.name }</li>
                )
            })
        }

        return (
            <div>
                <h1>{ this.props.match.params.username }</h1>
                {user && 
                <div>
                    <img src={ user.avatar_url } alt=""/>
                    <a href={ user.html_url } >{ user.html_url }</a>
                    <ul>
                        <li>company: { user.company }</li>
                        <li>location: { user.location }</li>
                        <li>blog: <a href={ user.blog }>{ user.blog }</a></li>
                        <li>company: { user.company }</li>
                        <li>create date: { user.created_at }</li>
                    </ul>
                    <ul>
                        { repos }
                    </ul>
                </div>}
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