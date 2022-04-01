const Frame = require('./frame');

class Game {
  constructor() {
    this.score = [];
    this.frame = new Frame;
    this.max_frames = 10;
  }

  getScore() {
    return this.score
  }

  rollPins(pins) {
    if (this._tenthFrame()) return this._checkBonuses() ? this._bonusRound(pins) : this.totalScore()
    this.frame.rollPins(pins);
    if (this.frame.frameOver()) return this._newFrame();
  }

  totalScore() {
    let total = 0
    this.score.map ( frame => frame.map( score => total += score) )
    return total
  }

  _frameScore() {
    return this.frame.getScore();
  }

  _newFrame() {
    if (this.score.length >=1) this._calculateBonuses()
    this.score.push(this._frameScore());
    this.frame = new Frame;
  }

  _prevFrame() {
    return this.score[this.score.length - 1];
  }

  _wasStrike() {
    return this._prevFrame()[0] === 10;
  }

  _wasSpare() {
    return (this._prevFrame()[0] + this._prevFrame()[1] === 10) 
    && !this._wasStrike();
  }

  _calculateBonuses() {
    if (this._wasStrike()) this._prevFrame()[0] += this._frameScore()[0] + this._frameScore()[1];
    if (this._wasSpare()) this._prevFrame()[1] += this._frameScore()[0];
  }

  _tenthFrame() {
    return this.score.length === this.max_frames
  }

  _checkBonuses () { 
    return this._bonus("spare", 2) 
        || this._bonus("strike", 1) 
        || (this._bonus("strike", 2) && this._prevFrame()[1] === 10);
  }

  _bonus(bonus, rolled) {
    bonus === "spare" ? bonus = this._wasSpare() : bonus = this._wasStrike()
    return bonus && this._prevFrame().length === rolled
  }

  _bonusRound(pins) {
    this._prevFrame().push(pins);
  }
}

module.exports = Game