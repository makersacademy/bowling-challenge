class Game {
    'use strict';
    constructor(){
      this.frame = 1;
      this.roll = 1;
      this.knocked = 0;
      this.score = [];
    }

    play(pins){
      if(this.frame >= 11){
        return this.end()
      }
      this.addScore(pins)
      if(this.roll === 2){
        this.frame ++;
        this.roll = 1;
      } else {
        this.roll ++;
      }
    }
    end(){
      return "The game has ended.";
    }

    addScore(pins){
      this.knocked = pins
      this.score.push({frame: this.frame, roll: this.roll, knocked: this.knocked})
    }
}
