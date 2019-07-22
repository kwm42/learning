import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      content: undefined
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.content ? 
        <div>{ this.state.content }</div> : 
        <div>no content.... loading...</div>}

        <button onClick={ ()=>this.fetchContent() }>fetch data</button>
      </div>
    );
  }

  fetchContent(){
    fetch('http://127.0.0.1:3001/hello')
      .then(res => res.json())
      .then(res => {
        let { content } = res;
        this.setState({
          content: content
        })
        console.log(res)
      })
      .catch(err => {
        console.error(err);
      })
  }
}

export default App;
