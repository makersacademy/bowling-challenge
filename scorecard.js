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

  getThisGame () {
    return this.game;
  }

  addFrame (index, score) {
    let frame = new Frame(index, score);
    this.game.push(frame);
    this.updateScore(frame);
  }

  updateScore (frame) {
    this.total_score += frame.getTotal();
  }

  getScore () {
    return this.total_score;
  }

  calculateScore () {
    let bonus_score = this.calculateStrikeBonus() + this.calculateSpareBonus();
    this.total_score += bonus_score;
  }

  idStrikes () {
    let strikes = [];
    this.game.forEach(frame => {
      if (frame.getStrike() && frame.getIndex() <= 8) {
        strikes.push(frame.getIndex());
      }
    })
    return strikes;
  }

  calculateStrikeBonus () {
    let bonus = 0;
    const strikes = this.idStrikes()
    strikes.forEach(strike => {
      if (this.game[strike+1].getFrame()[0] === 10) {
        bonus += this.game[strike+1].getTotal();
        bonus += this.game[strike+2].getFrame()[0];
      } else {
        bonus += this.game[strike+1].getTotal();
      }
    })
    return bonus;
  }

  idSpares () {
    let spares = [];
    this.game.forEach(frame => {
      if (frame.getSpare() && frame.getIndex() <= 8) {
        spares.push(frame.getIndex());
      }
    })
    return spares;
  }

  calculateSpareBonus () {
    let bonus = 0;
    const spares = this.idSpares()
    spares.forEach(spare => {
      bonus += this.game[spare+1].getFrame()[0];
    })
    return bonus;
  }
}

module.exports = Scorecard;