import React, { Component } from 'react';
import Sample from './components/Sample';
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
        <Sample></Sample>
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
      })
      .catch(err => {
        console.error(err);
      })
  }
}

export default App;
