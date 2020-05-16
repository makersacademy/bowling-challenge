class Game {
    'use strict';
    constructor(){
      this.frame = 1;
      this.roll = 1;
      this.knocked = 0;
      this.score = [];
      this.isEnded = false;
    }

    play(pins){
      if(this.isEnded){
        return this.end();
      }
      if(this.frame === 10 && this.roll === 3){
        this.addScore(pins)
        return this.end();
      }
      if(this.frame === 10 && this.roll === 2){
        this.addScore(pins)
        if(this.isExtraRound()){
          this.roll ++;
          return;
        } else {
          return this.end();
        }
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
      this.isEnded = true;
      return "The game has ended.";
    }

    addScore(pins){
      this.knocked = pins
      this.score.push({frame: this.frame, roll: this.roll, knocked: this.knocked})
    }

    isExtraRound(){
      var finalPins = this.score[this.score.length - 1].knocked;
      var preceedingPins = this.score[this.score.length - 2].knocked;
      /// checks for spare
      if(finalPins + preceedingPins === 10){
        return true;
      }
      /// checks for strike in preceeding roll (frame: 10, roll: 1)
      if(preceedingPins === 10){
        return true;
      }
      return false;
    }
}
