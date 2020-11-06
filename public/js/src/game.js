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
      this._addBonusRoll(pins);
    }
    else {
      this._isNewFrame() ? this._createFrame(pins) : this._endFrame(pins);
    }
  };

  score(){
    return this._calculateScore(); 
  };

  _calculateScore(){
    let score = 0;
    for(var i = 0; i < this._rolls.length; i++){
      if(this._rolls[i].isStrike()){
        this._rolls[i].isBonusFrame() ? score += this._scoreFrame(i) : score += this._scoreRegularStrike(i);
      } else {
        this._rolls[i].isSpare() ? score += this._scoreSpare(i) : score += this._scoreFrame(i);
      }
    };
    return score;
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
    if(this._roll_number === 18){
      this._frame.isFinal();
    }
    this._rolls.push(this._frame);
  }

  _createFrame(pins){
    this._frame = new Frame();
    this._frame.addToFrame(pins);
    if(this._roll_number === 18){
      this._frame.isFinal();
    }
    this._roll_number += 1;
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
    let score = this._followedByStrike(i) ? this._doubleStrikeBonus(i) : this._regularStrikeBonus(i);
    return score;
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