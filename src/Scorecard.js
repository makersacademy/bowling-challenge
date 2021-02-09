'use strict';

class Scorecard {

  constructor(){
    this.frames = 1
    this.frame_score = []
    this.scores = []
    this.running_score = []
    this.cumul_score = ""
    this.displayScores = []
    this.roll_num = 1
    this.bonus_roll = false
  }

  add(pins) {
    if (this.frames < 10 && this.roll_num === 1) {
      this.getRoll(pins);
      if (this.isStrike()){
        this.frames += 1;
        this.displayScores.push(0);
        this.clearFrame();
      } else {
        this.roll_num += 1;
      }
    } else if (this.frames < 10 && this.roll_num === 2) {
      this.getRoll(pins);
      this.frames += 1;
      this.clearFrame();
      this.roll_num -= 1;
    } else if (this.frames === 10 && this.roll_num === 1) {
      this.getTenthFrameRoll(pins);
    } else if (this.frames === 10 && this.roll_num === 2) {
      this.getTenthFrameRoll(pins);
    } else if (this.frames === 10 && this.roll_num === 3 && this.isBonusBall() === true) {
      this.getTenthFrameRoll(pins);
    } else {
      return this.gameOver();
      }
    }

  getRoll(pins){
    this.frame_score.push(pins);
    this.scores.push(pins);
    this.displayScores.push(pins);
  }

  getTenthFrameRoll(pins){
    this.getRoll(pins);
    this.roll_num += 1;
  }

  isStrike(){
    return (this.frame_score[0] === 10) ? true : false
  }

  isSpare(){
    return (this.frame_score[0] + this.frame_score[1]) === 10 ? true : false
  }

  isBonusBall(){
    return (this.frame_score[0] + this.frame_score[1]) >= 10 ? true : false
  }

  clearFrame(){
    while(this.frame_score.length > 0) {
      this.frame_score.pop();
    }
  }

  gameOver(){
    return("Game over: You have played 10 frames")
  }

  finalFrameCalc(){
    var sum = this.frame_score.reduce((pv, cv) => pv + cv, 0);
    if (sum > 10) {
      this.running_score.push(this.scores.slice(-3)[0] + this.scores.slice(-2)[0] + this.scores.slice(-1)[0]);
    } else {
      this.running_score.push(this.scores.slice(-2)[0] + this.scores.slice(-1)[0]);
    }
  }

  cumulCalc(){
    var i = 0;
    while (i < this.scores.length-3){
      if (this.scores[i] === 10) {
        this.running_score.push(this.scores[i] + this.scores[i+1] + this.scores[[i+2]]);
        i += 1;
      } else if (this.scores[i] + this.scores[i+1] === 10){
        this.running_score.push(this.scores[i] + this.scores[i+1] + this.scores[[i+2]]);
        i += 2;
      } else {
        this.running_score.push(this.scores[i] + this.scores[i+1]);
        i += 2;
      }
    }
    this.finalFrameCalc();
    var result = this.running_score.reduce(function(a,b,i){ return i === 0 ?  [b]: a.concat(a[i-1]+b);},0);
    this.cumul_score = result
    return (result)
  }

}
