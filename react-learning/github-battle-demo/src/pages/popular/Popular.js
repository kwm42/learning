import React from 'react'
import Loading from '../../components/loading'
import RepoList from '../../components/repoList'
import './Popular.css'

class Popular extends React.Component{
    constructor(){
        super()
        this.state = {
            repos: null,
            languages: ['All', 'Java', 'JavaScript', 'C', 'C++', 'Python', 'PHP'],
            selectedLanuage: 'All',
            sortBy: 'stars'
        }
    }

    render(){
        let languages = this.state.languages
        languages = languages.map( (l, index) => {
            return <li key={ index } onClick={ () => this.changeLanguage(l) }>{ l }</li>
        });

        return (
            <div>
                <div>
                    <ul className="language-select">
                        { languages }
                    </ul>
                </div>
                <div>
                    <span>sort by: </span>
                    <select onChange={() => this.handleSelectChange()} ref="sortby">
                        <option value="stars">stars</option>
                        <option value="forks">forks</option>
                        <option value="issues">issues</option>
                    </select>
                </div>
                { this.state.repos?
                    <RepoList repos={ this.state.repos }/>:
                    <Loading />
                }
            </div>
        )
    }

    fetchPopularRepos(){
        let language = this.state.selectedLanuage
        let sort = this.state.sortBy
        fetch('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort='+ sort +'&order=desc&type=Repositories')
            .then(res => res.json() )
            .then(data => {
                this.setState({
                    repos: data.items
                })
            })
    }

    componentDidMount(){
        this.fetchPopularRepos()
    }

    async changeLanguage(l){
        await this.setState({
            selectedLanuage: l,
            repos: null
        })
        this.fetchPopularRepos()
    }

    async handleSelectChange(){
        let sortBy = this.refs.sortby.value
        await this.setState({
            repos: null,
            sortBy: sortBy
        })
        this.fetchPopularRepos()
    }   
}

export default Popular;