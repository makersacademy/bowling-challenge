class ScoreCard{
    'use strict';
    constructor(){
      this.total = 0;
      this.scoreboard = [];
    }

    addScore(frame, roll, knocked){
      if(knocked === 10 && frame !== 10){
        this.scoreboard.push({frame: frame, roll: roll, knocked: knocked})
        this.scoreboard.push({frame: frame, roll: 2, knocked: 0})
      } else {
        this.scoreboard.push({frame: frame, roll: roll, knocked: knocked})
      }
    }
}
