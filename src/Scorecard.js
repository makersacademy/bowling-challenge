class ScoreCard{
    'use strict';
    constructor(){
      this.total = 0;
      this.scoreboard = [];
    }

    addScore(frame, roll, knocked){
      if(knocked === 10 && roll !== 3){
        this.scoreboard.push({frame: frame, roll: roll, knocked: knocked})
        this.scoreboard.push({frame: frame, roll: 2, knocked: 0})
      } else {
        this.scoreboard.push({frame: frame, roll: roll, knocked: knocked})
      }
    }

    calculate(){
      for(let i = 0; i < this.scoreboard.length; i++) {
        this.total += this.scoreboard[i].knocked;
      }

      // add bonus for strike
      for(let i = 0; i < this.scoreboard.length; i++) {
        if(this.scoreboard[i].roll === 3){
          return;
        }
        if(this.scoreboard[i].knocked === 10){
          if(this.scoreboard[i].frame !== 10){
            this.total += (this.scoreboard[i + 2].knocked + this.scoreboard[i + 3].knocked);
          }else{
            this.total += (this.scoreboard[i + 2].knocked);
          }
        }
      }

      // add bonus for spare
      for(let i = 0; i < (this.scoreboard.length - 1); i += 2) {
        if((this.scoreboard[i].knocked + this.scoreboard[i+1].knocked) === 10
        && this.scoreboard[i].knocked !== 10 && this.scoreboard[i+1].knocked !== 10){
          if(this.scoreboard[i + 2].roll !== 3){
            this.total += this.scoreboard[i + 2].knocked;
          }
        }
      }
      console.log(this.total)
    }
}
