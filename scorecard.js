const Frame = require('./frame');

class Scorecard {
  constructor() {
    this.game = [];
    this.total_score = 0;
  }

  getGame () {
    let game_temp = [];

    this.game.forEach(frame => {
      game_temp.push(frame.getFrame());
    })

    return game_temp;
  }

  addFrame (index, score) {
    this.game.push(new Frame(index, score));
  }

  calculateScore () {
    this.game.forEach(frame => {
      this.total_score += frame.getTotal();
    })

    let bonus_score = this.calculateBonus()
    
    this.total_score += bonus_score;
  }

  idStrikes () {
    let strikes = [];
    this.game.forEach(frame => {
      if (frame.getStrike()) {
        strikes.push(frame.getIndex());
      }
    })
    return strikes;
  }

  calculateBonus () {
    let bonus = 0;
    const strikes = this.idStrikes()
    strikes.forEach(strike => {
      bonus += this.game[strike+1].getTotal();
      bonus += this.game[strike+2].getTotal();
      
    })
    return bonus;
  }

  getScore () {
    return this.total_score;
  }
}

module.exports = Scorecard;