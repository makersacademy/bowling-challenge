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
      // prevents someone from playing if game has ended
      if(this.isEnded || this.frame >= 11){
        return this.end();
      }
      // calls method to check for final frame rules
      if(this.frame === 10){
        this.finalFrameRules(pins)
      }else{
        this.addScore(pins)
        // sets next roll and frame
        if(this.roll === 2 || pins === 10){
          this.frame ++;
          this.roll = 1;
        } else {
          this.roll ++;
        }
      }
    }

    finalFrameRules(pins){
      this.addScore(pins)
      // checks if player can have an extra round
      if(this.roll === 2){
        if(this.isExtraRound()){
          this.roll ++;
          return;
        } else {
          return this.end();
        }
      }
      // prevents any extra rounds if extra round already played
      if(this.roll === 3){
        return this.end();
      }
      // increments roll for the first roll
      if(this.roll === 1){
        this.roll ++;
      }
    }

    end(){
      this.isEnded = true;
      return "The game has ended.";
    }

    addScore(pins){
      this.knocked = pins
      if(this.knocked === 10 && this.frame !== 10){
        this.score.push({frame: this.frame, roll: this.roll, knocked: this.knocked})
        this.score.push({frame: this.frame, roll: 2, knocked: 0})
      } else {
        this.score.push({frame: this.frame, roll: this.roll, knocked: this.knocked})
      }
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
