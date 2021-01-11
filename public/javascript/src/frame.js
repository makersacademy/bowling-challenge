'use strict';

class Frame{

  constructor(){
    this.contents = [];
    this.number;
    this.remainingPins = 10;
  };

  recordRoll(pins){
    this._breakIfGameOVer()
    this._checkRemainingPins(pins)
    this.remainingPins -= pins
    this.contents.push(pins)
    if (this._isBonusRoll()) {
      this._resetPins()
    }
    
  };

  rolls(){
    return this.contents.length
  }

  points(nextRoll = 0, nextNextRoll = 0){
    this._applySpare(nextRoll);
    this._applyStrike(nextRoll, nextNextRoll);
    return this.contents.reduce((a, b) => a + b, 0);
  };

  isStrike(){
    if (this.contents.length === 1 && this._rawScore() === 10){
      return true;
    } else {
      return false;
    }
  };

  isSpare(){
    if (this.contents.length === 2 && this._rawScore() === 10){
      return true;
    } else {
      return false;
    }
  };

  _isBonusRollStrike(){
    let lastIndex = this.contents.length -1;
    if (this.contents.length === 2 && this.contents[lastIndex] === 10){
      return true;
    } else {
      return false;
    }
  };

  _applySpare(nextRoll){
    if (this.isSpare() && nextRoll > 0) {
      this.contents[1] += nextRoll;
    };
  };

  _applyStrike(nextRoll, nextNextRoll){
    if (this.isStrike() && nextRoll > 0 && nextNextRoll > 0) {
      this.contents[0] += nextRoll + nextNextRoll;
    }
    else if (this.isStrike() && nextRoll > 0) {
      this.contents[0] += nextRoll;
    };
  };

  _rawScore(){
    return this.contents.reduce((a, b) => a + b, 0);
  }

  _checkRemainingPins(pins){
    if ( this.remainingPins - pins < 0) { throw "CHEATER ALERT!!! PLEASE INPUT A SCORE EQUAL TO OR LOWER THAN THE NUMBER OF AVAILABLE PINS" }
  }

  _isBonusRoll(){
    if (this.number === 10 && (this.isStrike() || this.isSpare() || this._isBonusRollStrike())) {
      return true
    } else {
      return false
    }
  }

  _resetPins(){
    this.remainingPins = 10;
  }

  _breakIfGameOVer(){
    if ( this.number === 10 && ( this._isGameOverWithNoBonusOnFinalFrame() || this._isGameOverWithBonusOnFinalFrame() )) {
      throw "GAME OVER"
    }
  }

  _isGameOverWithNoBonusOnFinalFrame(){
    if ((this.contents[0] + this.contents[1] < 10) && (this.rolls() === 2)) {
      return true
    }
  }

  _isGameOverWithBonusOnFinalFrame(){
    if ((this.contents[0] + this.contents[1] >= 10) && (this.rolls() === 3)) {
      return true
    }
  }

}
