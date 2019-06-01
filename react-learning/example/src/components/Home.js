import React from 'react'
// import Rainbow from '../hoc/Rainbow'
import Axios from 'axios'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    state = {
        posts: []
    }

    render() {
        let { posts } = this.state
        let postList = posts.length > 0 ? (
            posts.map(post => {
                return (
                    <div className="card center post" key={ post.id }>
                        <div className="card-content">
                            <Link to={ '/post/' + post.id } className="card-title">{ post.title }</Link>
                            <p>{ post.body }</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">
                <h2>No posts yet</h2>
            </div>
        )

        return (
            <div className="container">
                <h2 className="center">Home</h2>
                { postList }
            </div>
        )
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
    }
}

// export default Rainbow(Home)
export default Home