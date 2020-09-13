'use strict';

$(document).ready(function(){
  game = new Game();
  var firstRoll;
  var runScore;
  pinHit = function(pins){
    if(isRollValid(pins) == false){
      return;
    }
    isGameOver();
    game.roll(pins);
    frameScore();
    totalScore();
  };

  frameScore() {
    frame1.innerHTML = this.rolls[0];
    frame2.innerHTML = this.rolls[1];
    frame3.innerHTML = this.rolls[2];
    frame4.innerHTML = this.rolls[3];
    frame5.innerHTML = this.rolls[4];
    frame6.innerHTML = this.rolls[5];
    frame7.innerHTML = this.rolls[6];
    frame8.innerHTML = this.rolls[7];
    frame9.innerHTML = this.rolls[8];
    frame10.innerHTML = this.rolls[9];
  };

  totalScore = function() {
    runScore = game.runningTotal;
    for(i = 0; i < game.frameNumber; i++){
        if(runScore[i]){
          this["marker"+i].innerHTML = runScore[i];
         }
      }
  };

  isRollValid = function(pins){
    comments.innerHTML = "";
    firstRoll = game.firstRollScore();
    if (game.rollNumber == 2 && (pins + firstRoll[0]) > 10) {
      comments.innerHTML = 'Invalid Roll - there are only ten pins!';
      return false;
    }
  };

  isGameOver = function(){
    if (game.gameover ===true ){
      var elems = document.getElementsByClassName("btn-primary");
      for(i = 0; i < 11; i++){
        elems[i].disabled = true;
      }
      marker0.innerHTML = game.runningTotal[-1];
      gameover.innerHTML = 'Game Over!';
      yourscore.innerHTML = 'Your score: ' +" "+ game.runningTotal[-1];
      playagain.innerHTML = '<button type="button" onclick="newGame()"  class="btn btn-secondary">Play Again!</button>'
      }else{
        return;
      }
  };

  newGame = function (){
    delete window.game;
    location.reload();
  }

});
function Game() {
  this.pinCount = 10;
  this.frameNumber = 1;
  this.rollNumber = 1;
  this.gameover = false;
  this.frameScore = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[]};
  this.totalScore = [];
  this.runningTotal = [];
  this.bonus = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', 10:''};
  this.bonusNextFrame = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', 10:''};
}
Game.prototype.throw = function(pinsHit) {
  this.rollNumber ++;
  this.pinCount -= pinsHit;
};

Game.prototype.roll = function(pinsHit) {
  this.isRollValid(pinsHit);
  if (this.frameNumber == 10){
    this.finalFrame(pinsHit);
    return;
  };
  if (pinsHit === 10 && this.rollNumber === 1) {
    this.frameScore[this.frameNumber].push("X");
    this.bonus[this.frameNumber] = 'Strike';
    this.bonusNextFrame[this.frameNumber +1] = 'StrikeFrame';
    this.nextFrame(pinsHit);
    return pinsHit;
  } else if((pinsHit + this.firstRollScore()[0]) === 10 && this.rollNumber > 1) {
    this.frameScore[this.frameNumber].push("/");
    this.bonus[this.frameNumber] = 'Spare';
    this.bonusNextFrame[this.frameNumber +1] = 'SpareFrame';
    this.nextFrame();
    return pinsHit;
  }
  else {
    this.throw(pinsHit);
    this.frameScore[this.frameNumber].push(pinsHit)
    if (this.isFrameComplete()){
      this.nextFrame();
    } else {
      return pinsHit;
    }
  }
};




class bowlingGame {

  constructor() {
    this.rolls = [[], [], [], [], [], [], [], [], [], []];
    this.runningScore = 0;
    this.frameIndex = 1;
    this.rollIndex = 0;
  };

  firstRoll(points) {
    this.rolls[this.frameIndex -1].push(points);
    this.runningScore += points;
    if (points === 10) {
      this.frameIndex++
    };
  };

  secondRoll(points) {
    this.rolls[this.frameIndex -1].push(points);
    this.runningScore += points;
    this.frameIndex++
  };

  spareCalc() {
    let bonus = 0;
    const frameTotal = this.rolls[this.frameIndex - 2][this.rollIndex] + this.rolls[this.frameIndex - 2][this.rollIndex + 1];
    if (this.isSpare(frameTotal)) {
      bonus += this.spareBonus();
    };
    this.runningScore += bonus;
  };

  strikeCalc() {
    let bonus = 0;
    if (this.isStrike()) {
      bonus += this.strikeBonus()
    };
    this.runningScore += bonus;
  };

  isSpare(frameTotal) {
    return frameTotal === 10;
  };
  
  spareBonus() {
    return this.rolls[this.frameIndex - 1][this.rollIndex];
  };

  isStrike() {
    return this.rolls[this.frameIndex - 3][this.rollIndex] === 10;
  };

  strikeBonus() {
    return this.rolls[this.frameIndex - 2][this.rollIndex] + this.rolls[this.frameIndex - 2][this.rollIndex + 1];
  };

}; 