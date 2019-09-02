"use strict";
function Frame(isFinalFrame=false){
  this.score = [];
  this.bonus = [];
  // this.isFinalFrame = isFinalFrame;
  this.frameFinalScore = null;
  //result can be normal, strike or spare
  this.result = null;

  Frame.prototype.setScore = function(score){
    this.score.push(score);
  }

  Frame.prototype.setBonus = function(bonus){
    this.bonus.push(bonus);
  }

  Frame.prototype.updateFrameResult = function(){
    if(this.score[0] == 10){
      this.result = "strike";
    }
    else if(this.score[0] + this.score[1] == 10){
      this.result = "spare";
    }
    else{
      this.result = "normal";
    }
  }

  Frame.prototype.calculateTotalScore = function(){
    var totalScore = this.score.reduce((a,b)=>a+b, 0);
    var totalBonus = this.bonus.reduce((a,b)=>a+b, 0);
    var total = totalScore + totalBonus;
    return total;
  }

  Frame.prototype.resetBonus = function(){
    this.bonus = [];
  }






}
