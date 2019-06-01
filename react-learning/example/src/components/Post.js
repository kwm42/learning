import React from 'react'
import Axios from 'axios'

class Post extends React.Component{
  state = {
    postId: null,
    post: null
  }
  render(){
    let post = this.state.post
    post = post ? (
      <div className="center">
        <h3 className="title">{ post.title }</h3>
        <p>{ post.body }</p>
      </div>
    ) : (
      <div className="center">
        <h3>Loading post content.....</h3>
      </div>
    )

    return (
      <div className="container">
        { post }
      </div>
    )
  }

  componentDidMount(){
    let postId = this.props.match.params.post_id
    this.setState({
      postId: postId
    })
    Axios.get('https://jsonplaceholder.typicode.com/posts/' + postId)
      .then(res => {
        this.setState({
          post: res.data
        })
      })
  }
}

export default Post