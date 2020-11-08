'use strict';

class Game {
  constructor(){
    this._rolls = [];
    this._roll_number = 0;
  }

  bowl(pins){
    if (this._isStrike(pins)){
      this._completeStrikeFrame();
    }
    else if (this._isFinalFrame()){
      let result = this._isBonus() ? this._addBonusRoll(pins) : "GAME OVER";
      return result;
    }
    else {
      this._isNewFrame() ? this._createFrame(pins) : this._endFrame(pins);
    }
  };

  _isBonus(){
    return (this._lastFrame().isStrike() || this._lastFrame().isSpare()) && this._lastFrame().currentFrame.length <= 2;
  }

  _lastFrame(){
    return this._rolls[this._rolls.length-1]
  }

  isInvalidRoll(pins){
   if (this._frame){
    let result = this._frame.finalFrame ? pins > 10 : (this._frame.firstRoll() + pins > 10) && this._frame.currentFrame.length === 1;
    return result
    } else {
     return (pins > 10);
   };
  };

  score(){
    return this._calculateScore(); 
  };

  newGame(){
    this._rolls = [];
    this._roll_number = 0;
  }
  
  _calculateScore(){
    let score = 0;
    for(var i = 0; i < this._rolls.length; i++){
       score += this._strikeNotPending(i) ? this._scoreRegularStrike(i) : this._scoreIncrement(i);
    };
    return score;
  }

  _scoreIncrement(i){
    return this._spareNotPending(i) ? this._scoreSpare(i) : this._scoreFrame(i);
  }

  _strikeNotPending(i){
    return this._rolls[i].isStrike() && this._rolls[i+1]
  }

  _spareNotPending(i){
    return this._rolls[i].isSpare() && this._rolls[i+1] 
  }

  _isStrike(pins){
    return this._roll_number % 2 === 0 && pins === 10 && this._roll_number < 18
  }

  _isFinalFrame(){
    return this._roll_number === 20
  }

  _completeStrikeFrame(){
    this._frame = new Frame();
    this._completeFrame(10);
    this._roll_number += 2;
  }

  _isNewFrame(){
    return this._roll_number % 2 === 0
  }

  _endFrame(pins){
    this._frame.addToFrame(pins);
    this._roll_number += 1;
    this._rolls.push(this._frame);
  }

  _createFrame(pins){
    this._frame = new Frame();
    this._frame.addToFrame(pins);
    this._checkFinalFrame();
    this._roll_number += 1;
  }

  _checkFinalFrame(){
    if(this._roll_number === 18){
      this._frame.isFinal(); 
    }
  }

  _addBonusRoll(pins){
    this._rolls[this._rolls.length-1].addToFrame(pins);
  }

  _completeFrame(pins){
    this._frame.addToFrame(pins);
    this._frame.addToFrame(0);
    this._rolls.push(this._frame);
  };
  
  _doubleStrikeBonus(i){
    return 10 + this._rolls[i+1].firstRoll() + this._rolls[i + 2].firstRoll();
  }

  _regularStrikeBonus(i){
    return 10 + this._rolls[i+1].firstTwoRolls();
  }

  _scoreRegularStrike(i){
    return this._followedByStrike(i) ? this._doubleStrikeBonus(i) : this._regularStrikeBonus(i);
  }

  _followedByStrike(i){
    return this._rolls[i+1].firstRoll() === 10 && this._rolls[i+2]
  };

  _scoreFrame(i){
    return this._rolls[i].total();
  }

  _scoreSpare(i){
    return 10 + this._rolls[i+1].firstRoll();
  }
};