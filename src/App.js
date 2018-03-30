import React, { Component } from 'react';
import Background from './background'
class App extends Component {
  componentDidMount() {
    let BgContainer = document.getElementById("background");
    if(BgContainer){
      new Background(BgContainer)
    }
    
  }
  render() {
    return (
      <div className="App">
        <div id="background"></div>
        <header className="App-header">
          <h1 className="App-title">PIXI Lab</h1>
        </header>
      </div>
    );
  }
}

export default App;
