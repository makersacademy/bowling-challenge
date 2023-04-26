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

    let bonus_score = this.calculateStrikeBonus() + this.calculateSpareBonus();
    
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

  calculateStrikeBonus () {
    let bonus = 0;
    const strikes = this.idStrikes()
    strikes.forEach(strike => {
      bonus += this.game[strike+1].getTotal();
      bonus += this.game[strike+2].getTotal();
      
    })
    return bonus;
  }

  idSpares () {
    let spares = [];
    this.game.forEach(frame => {
      if (frame.getSpare()) {
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

  getScore () {
    return this.total_score;
  }
}

module.exports = Scorecard;