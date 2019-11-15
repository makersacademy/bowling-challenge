import React from 'react';
import './App.css';
import Bowling from './lib/bowling';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bowling: new Bowling()
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Score: {this.state.bowling.getScore()}</p>

        </header>
      </div>
    );
  }
  
}

export default App;
