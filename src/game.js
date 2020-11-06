'use strict';

class Game {

  constructor(){
    this._rolls = [];
    this._roll_number = 0;
  }

  bowl(pins){
    if (this._roll_number % 2 === 0 && pins === 10){
      this._frame = [];
      this._frame.push(pins);
      this._frame.push(0);
      this._rolls.push(this._frame);
      this._roll_number += 2;
    }
    else if (this._roll_number % 2 === 0){
      this._frame = [];
      this._frame.push(pins);
      this._roll_number += 1;
    }
    else{
      this._frame.push(pins);
      this._rolls.push(this._frame);
      this._roll_number += 1;
    }
  };

  score(){
    let score = 0;
    let game_length = this._rolls.length;
    for(var i = 0; i < game_length; i++){
      if(this._rolls[i][0] === 10){
        score += 10 + this._rolls[i+1][0] + this._rolls[i+1][1];
      }
      else if(this.scoreFrame(i) === 10){
        score += 10 + this._rolls[i+1][0];
      }
      else{
        score += this.scoreFrame(i);
      }
    };
    return score;
  };

  scoreFrame(i){
    return this._rolls[i][0] + this._rolls[i][1];
  };


};