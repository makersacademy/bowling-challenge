class Game {
    'use strict';
    constructor(scorecard){
      this.scorecard = this._scorecard = typeof scorecard !== 'undefined' ? scorecard : new ScoreCard();
      this.frame = 1;
      this.roll = 1;
      this.knocked = 0;
      this.isEnded = false;
    }

    play(pins){
      // prevents from playing if game has ended
      if(this.isEnded || this.frame >= 11){
        return this.end();
      }
      // calls method to check for final frame rules
      if(this.frame === 10){
        this.finalFrameRules(pins)
      }else{
        this.scorecard.addScore(this.frame, this.roll, pins)
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
      this.scorecard.addScore(this.frame, this.roll, pins)
      // prevents any extra rounds if extra round already played
      if(this.roll === 3){
        return this.end();
      }

      // if scored a strike, increment roll by 2
      if(this.roll === 1 && pins === 10){
        this.roll += 2;
        return;
      }
      // if roll is two, check if they can have an extra round
      if(this.roll === 2){
        if(this.isExtraRound()){
          this.roll ++;
          return;
        }else{
          return this.end();
        }
      }

      // if roll is one but no strike, increment by 1
      if(this.roll === 1){
        this.roll ++;
        return;
      }
    }

    end(){
      this.isEnded = true;
      return "The game has ended.";
    }

    isExtraRound(){
      var finalPins = this.scorecard.scoreboard[this.scorecard.scoreboard.length - 1].knocked;
      var preceedingPins = this.scorecard.scoreboard[this.scorecard.scoreboard.length - 2].knocked;
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
