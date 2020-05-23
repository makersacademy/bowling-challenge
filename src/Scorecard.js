class ScoreCard{
    'use strict';
    constructor(){
      this.total = 0;
      this.scoreboard = [];
      this.totalArray = [];
      this.rollArray = [];
      this.spareBonusStatus = false;
      this.strikeBonusStatus = false;
      this.anotherRoll = false;
    }

    updateScoreboard(frame, roll, knocked){
      this.scoreboard.push({frame: frame, roll: roll, knocked: knocked})
      this.rollArray.push(knocked)
      this.calculate(knocked)
      this.addSpareBonus()
      if(this.rollArray.length % 2 === 0){this.addStrikeBonus()}
      if(this.rollArray.length % 2 === 0){this.isSpareBonus()}
      if(this.rollArray.length % 2 === 0){this.isStrikeBonus()}
    }

    calculate(knocked){
      this.totalArray.push(knocked)
      return this.total = this.totalArray.reduce((a,b) => a + b, 0)
    }

    addSpareBonus(){
      if(this.spareBonusStatus === true){
        this.calculate(this.rollArray[this.rollArray.length - 1]);
        this.spareBonusStatus = false;
      }
    }
    addStrikeBonus(){
      if(this.anotherRoll === true ){
        this.calculate(this.rollArray[this.rollArray.length - 2])
        this.anotherRoll = false;
      }
      if(this.strikeBonusStatus === true){
        this.calculate(this.rollArray[this.rollArray.length - 2]);
        this.calculate(this.rollArray[this.rollArray.length - 1]);
        if(this.rollArray[this.rollArray.length - 2] === 10){
          this.anotherRoll = true;
        } else {this.strikeBonusStatus = false;}
      }
    }

    // has to be implemented on an even number of array elements
    isSpareBonus(){
      if((this.rollArray[this.rollArray.length - 1] + this.rollArray[this.rollArray.length - 2]) === 10 && this.rollArray[this.rollArray.length - 2] !==10){
        return this.spareBonusStatus = true;
      } else {
        return this.spareBonusStatus = false;
      }
    }
    // has to be implemented on an even number of array elements
    isStrikeBonus(){
       if(this.rollArray[this.rollArray.length - 2] === 10){
        return this.strikeBonusStatus = true;
      } else {
        return this.strikeBonusStatus = false;
      }
    }
}
