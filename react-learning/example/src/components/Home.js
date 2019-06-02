import React from 'react';
// import Rainbow from '../hoc/Rainbow'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends React.Component {

    render() {
        let { posts } = this.props
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
    }
}

const mapStoreToProps = (state) => {
    return {
        posts: state.posts
    }
}

// export default Rainbow(Home)
export default connect(mapStoreToProps)(Home);