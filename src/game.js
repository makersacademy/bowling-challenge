const Frame = require("./frame");

class Game {
  constructor() {
    this.frames = [];
  }

  roll(firstPins, secondPins) {
    this._rollParams(firstPins, secondPins);
    this._createFrame(firstPins, secondPins);
    if(this.frames.length > 3){
      this._bonusScan();
    }
  }

  _createFrame(firstPins, secondPins) {
    var frame = new Frame();
    frame.firstRoll(firstPins);
    frame.secondRoll(secondPins);
    this.frames.push(frame);
  }

  _isStrike(frame) {
    if (frame.first_roll === 10 && frame.second_roll === null) {
      return true;
    }
  }

  _strikeBonus(frame){
    if (!this._isStrike(this.frames[this.frames.length - 2])){
      this.frames[this.frames.length - 3].score += this.frames[this.frames.length - 2].score
    } else {
      this.frames[this.frames.length - 3].score += 10 + this.frames[this.frames.length - 1].firstRoll
    }
  }

  _isSpare(frame) {
    if (frame.score === 10 && frame.second_roll !== null) {
      return true;
    }
  }

  _spareBonus(frame){
    this.frames[this.frames.length - 3].score += this.frames[this.frames.length - 2].first_roll
  }

  _bonusScan(){
    console.log(this.frames[this.frames.length - 3]);
    if (this._isStrike(this.frames[this.frames.length - 3])){
      this._strikeBonus(this.frames[this.frames.length - 3])
    } else if (this._isSpare(this.frames[this.frames.length - 3])){
      this._spareBonus(this.frames[this.frames.length - 3])
    }
  }


  _rollParams(firstPins, secondPins) {
    var pins = firstPins + secondPins;
    if (!Number.isInteger(firstPins)) {
      throw Error("Please enter a number!");
    } else if (pins < 0) {
      throw Error("You cannot throw a negative roll!");
    } else if (pins > 10) {
      throw Error("There are only 10 pins!");
    }
  }
}

module.exports = Game;
