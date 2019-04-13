// 'use strict';

function Game() {
  this.complete = false;
  this.frameList = [];
  this.bonuses = [];
  this.lastRound = false;
}

Game.prototype.recordBall = function(score) {

  if (this.complete === true) { return "Game Over" }

  if (this.frameList.length === 0) {
    this.frameList.push(createNewFrame(score));
    return this;
  }

  if (this.frameList.length === 9 && this.frameList.slice(-1)[0].isComplete() === true) {
    this.lastRound = true;
  }

  if (this.frameList.slice(-1)[0].isComplete() === false) {
    addToFrame(score, this.frameList.slice(-1)[0], this.lastRound);
  }
  else {
    this.frameList.push(createNewFrame(score, this.lastRound));
  }

  this.complete = checkEndOfGame(this.frameList);

  Game.prototype.addBonusScores(this.frameList);

  function createNewFrame(score, lastRound = false) {
    let frame = new Frame();
    return frame.recordScore(score, lastRound);
  }

  function addToFrame(score, frame, lastRound = false) {
    frame.recordScore(score, lastRound);
  }

  function checkEndOfGame(frameList) {
    if (frameList.length === 10 && frameList.slice(-1)[0].isComplete() === true) {
      return true;
    } else { return false; }
  }

}

Game.prototype.addBonusScores = function(frameList) {
  frameList.forEach(function (frame, index) {
    let bonusPoints = 0;
    let isTen = frame.balls.reduce(function(total, ball) { return total += ball; }, 0);
    if(isTen === 10 && frame.total === 10) {
      if(frameList[index+1]) {
        if (frame.balls.length === 1 ) {
          // strike
          let ball1 = frameList[index+1].balls[0]
          let ball2 = null;
          if (frameList[index+1].balls[0] === 10 && frameList[index+2]){
            ball2 = frameList[index+2].balls[0];
          }
          else {
            ball2 = frameList[index+1].balls[1]
          }

          if (ball2){
            bonusPoints += ball1 + ball2;
          }
        }
        else {
          // spare
          let ball1 = frameList[index+1].balls[0]
          bonusPoints += ball1;
        }
      }
    }
    frame.total += bonusPoints;
  });
}

Game.prototype.isComplete = function() {
  return this.complete;
};

Game.prototype.calculateTotal = function() {
  let total = 0;
  this.frameList.forEach(function(frame){
    total += frame.total;
  });
  return total;
}

Game.prototype.frameIsBonus = function(frame) {
  let isTen = frame.balls.reduce(function(total, ball) { return total += ball; }, 0);

  if(isTen === 10) {
    return true;
  } else {
    return false;
  }
}

Game.prototype.getFrameMessage = function(frameNumber) {
  console.log(this.frameList[frameNumber]);
  if(Game.prototype.frameIsBonus(this.frameList[frameNumber]) === true) {
    return "Bonus!";
  }
}
