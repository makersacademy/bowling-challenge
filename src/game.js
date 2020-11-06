'use strict';

class Game {

  constructor(){
    this._score = 0;
  }
  
  bowl(pins){
    this._score += pins;
  };

  score(){
    return this._score;
  }
};