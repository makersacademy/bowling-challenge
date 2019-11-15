import React from 'react';
import './App.css';
import Bowling from './lib/bowling';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bowling: new Bowling(),
      goValue: '',
      rolls: [],
      score: 0,
      frame: 1
    }
    this.addScore = this.addScore.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.calculateScore = this.calculateScore.bind(this)
  }

  handleChange(e) {
    this.setState({ goValue: e.target.value })
  }

  addScore() {
    if(this.state.goValue !== '') { 
      this.state.bowling.roll(this.state.goValue)
    }
    document.querySelector('#score-value').value = '';
    this.setState({goValue: ''})
  }

  calculateScore() {
    this.state.bowling.calculateScore()
    this.setState({ score: this.state.bowling.score });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the bowling scorecard</h1>
          <div className="scores-enter">
            <p>Enter your go scores</p>
            <div className="scores-flex">
              <select id="score-value" name="score" type="select" placeholder="Enter score" onChange={this.handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <button onClick={this.addScore}>Add score</button>
            </div>
          </div>
          <p>Rolls: {this.state.bowling.rolls.map((roll, i) => <span key={i}>{roll},</span>)}</p>
          <button className="button-calculate" onClick={this.calculateScore}>Calculate final score</button>
          <p>Score: {this.state.score}</p>
        </header>
      </div>
    );
  }
  
}

export default App;
