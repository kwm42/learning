import React from 'react';
import './App.css';
import './canvas.js';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <canvas id="canvas"></canvas>
      </div>
    )
  }
}

export default App;
