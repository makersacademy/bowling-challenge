function Bowling () {
  this.currentPins = 10;
  this.score = 0;
  this.allFrames = {1: [], 2: [],
                    3: [], 4: [],
                    5: [], 6: [],
                    7: [], 8: [],
                    9: [], 10:[]};
  this.currentFrame = 1;
  this.round = 0;
  this._totalScore = 0;
  this.finishedGame = false;
}

Bowling.prototype.viewTotalScore = function () {
  return this._totalScore;
};

Bowling.prototype.isSpare = function () {
  if (this.currentFrame > 1){
    if((this.allFrames[this.currentFrame - 1][0] + this.allFrames[this.currentFrame - 1][1]) === 10 && this.round === 1){
      return true;
    } else {
      return false;
    }
  }
};

Bowling.prototype.isStrike = function () {
  if (this.currentFrame > 1){
    if (this.allFrames[this.currentFrame - 1].includes(10) && this.round === 1){
      return true;
    } else {
      return false;
    }
  }
};

Bowling.prototype.bowl = function () {
  this.setRound();
  this.dropPins();
};

Bowling.prototype.dropPins = function () {
  var hitPins = this.randomHit();
  this.currentPins -= hitPins;
  this.setScore(hitPins);
};

Bowling.prototype.setScore = function (hitPins) {
  this.score = hitPins;
  this.addScoreToFrame(hitPins);
  if (hitPins === 10 && this.round === 1 && this.currentFrame !== 10) {this.setRound();}
};

Bowling.prototype.setRound = function () {
  if (this.currentFrame === 10){
    this.lastRound();
  } else {
    if (this.round >= 2) {
      this.currentFrame += 1;
      this.resetRound();
    } else {
      this.round += 1;
    }
  }
};

Bowling.prototype.lastRound = function () {
  if (this.round >= 3) {
    alert("Game Finished!!! \nTotal Score: " + this.viewTotalScore());
    this.finishedGame = true;
  } else {
    if (this.score === 10) {
      this.resetRound();
    }
    this.round += 1;
  }
};

Bowling.prototype.addScoreToFrame = function (score) {
  this.allFrames[this.currentFrame].push(score);
  this.addTotalScore(score);
};

Bowling.prototype.addTotalScore = function (score) {
  if (this.isStrike() || this.isSpare()) {
    this._totalScore += (score * 2);
  } else {
    this._totalScore += score;
  }
};

Bowling.prototype.resetRound = function () {
  this.round = 1;
  this.currentPins = 10;
};

Bowling.prototype.isGameFinished = function () {
  return this.finishedGame;
};

Bowling.prototype.randomHit = function () {
  var value = this.currentPins + 1
  return Math.floor((Math.random() * value) + 0 );
};
