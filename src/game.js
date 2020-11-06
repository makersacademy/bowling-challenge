'use strict';

class Game {

  constructor(){
    this._rolls = [];
    this._roll_number = 0;
  }

  bowl(pins){
    if (this._roll_number % 2 === 0 && pins === 10 && this._roll_number < 18){
      this._frame = new Frame();
      this._completeFrame(pins);
      this._roll_number += 2;
    }
    else if (this._roll_number === 20){
      this._addBonusRoll(pins);
    }
    else if (this._roll_number % 2 === 0){
      this._frame = new Frame();
      this._frame.addToFrame(pins);
      this._roll_number += 1;
    }
    else{
      this._frame.addToFrame(pins);
      this._rolls.push(this._frame);
      this._roll_number += 1;
    }
  };

  rollNumber(){
    return this._roll_number;
  }

  rolls(){
    return this._rolls;
  }

  last_roll(){
    return this._rolls[this._rolls.length - 1].currentFrame;
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

  score(){
    let score = 0;
    let game_length = this._rolls.length;
    for(var i = 0; i < game_length; i++){
      if(this._rolls[i].isStrike()){
        if(this._rolls[i].isBonusFrame()){
          score += this._scoreFrame(i);
        }
        else {
          if(this._followedByStrike(i)){
            score += this._doubleStrikeBonus(i);
          }
          else{
            score += this._regularStrikeBonus(i);
          }
        }
      }
      else if(this._rolls[i].isSpare()){
        score += this._scoreSpare(i);
      }
      else{
        score += this._scoreFrame(i);
      }
    };
    return score;
  };

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