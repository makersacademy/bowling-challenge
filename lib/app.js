const Game = require('./game')
const Frame = require('./frame')
const prompt = require("prompt-sync")();

 class App {
  constructor() {
    this.game = new Game
  }

  play(){
    const times = 10;
    for(let i = 0; i < times; i++){
      let roll1 = prompt(`Please enter the score from your first roll from Frame ${this.game.frames.length + 1}:`)
      let roll2 = prompt(`Please enter the score from your second roll from Frame ${this.game.frames.length + 1}:`)
      this.game.addFrame(roll1, roll2)
    }
    console.log(this.game.score());
  };
};


const app = new App
app.play()
