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