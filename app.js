const Game = require("./game")

class App {
  constructor() {
    this.game = new Game;
  }

  run = () => {
    this.game.playFrames();
    this.game.playFinalFrame();
    this.returnScore();
    this.outputScore();
  }

  returnScore = () => {
    this.game.calculateBonus();
    this.game.calculateTotalScore();
  }
  
  outputScore = () => {
    if (this.game.total === 300) {
      console.log('Congrats! You had a Perfect Game!')
    } else if (this.game.total === 0) {
      console.log('You had a Gutter Game... Better luck next time!')
    } else {
      console.log(`Congrats! You scored ${this.game.total}!`)
    }
  }
}

const app = new App;
app.run();