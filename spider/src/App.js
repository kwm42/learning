import React, { Component } from 'react';
// import Sample from './components/Sample';
import MyLayout from './pages/layout';
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
        {/* <Sample></Sample> */}
        <MyLayout></MyLayout>
      </div>
    );
  }

  fetchContent(){
    fetch('/api/hello')
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
