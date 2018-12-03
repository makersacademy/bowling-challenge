"use strict"

function Scorecard() {
  this._scoresList = [];
  this.bonusCounters = [];
  this.currentFrame = 1;
  this.currentRoll = 1;
};
Scorecard.prototype.recordScore = function(score) {
  this._validateFrame(score);
  this._scoresList[this.currentFrame - 1][this.currentRoll - 1] = score;
  this.updateBonuses(score);
  if(score === 10) {
    // create a placeholder "S" for the bonus
    this._scoresList[this.currentFrame - 1][2] = "S";
    // add a bonus counter for this frame to the list
    this.bonusCounters.push(new BonusCounter(this.currentFrame, 2));
    this.currentFrame ++;
  } else if(this.currentRoll === 2) {
    if(score + this._scoresList[this.currentFrame - 1][0] === 10) {
      this._scoresList[this.currentFrame - 1][2] = "sp";
      this.bonusCounters.push(new BonusCounter(this.currentFrame, 1));
    };
    this.currentFrame ++;
    this.currentRoll = 1;
  } else {
    this.currentRoll ++;
  }
};
Scorecard.prototype._validateFrame = function(score) {
  if(this.currentFrame > 10) {
    throw "All frames have been completed";
  } else if(this._scoresList[this.currentFrame - 1] === undefined) {
    this._scoresList[this.currentFrame - 1] = [];
  } else if(score + this._scoresList[this.currentFrame - 1][0] > 10) {
    throw "Frame total would exceed 10";
  }
};
Scorecard.prototype.updateBonuses = function(score) {
  var scorecard = this;
  scorecard.bonusCounters.forEach(function(counter) {
    counter.add(score);
    counter.update();
    if(counter.life < 1) {
      scorecard._scoresList[counter.frame - 1][2] = counter.bonus;
    }
  });
  this.bonusCounters = this.bonusCounters.filter(function(counter) {
    return counter.life > 0;
  });
}
Scorecard.prototype.readScores = function(frame, roll) {
  return this._scoresList[frame - 1][roll - 1];
};
Scorecard.prototype.frameScore = function(frame) {
  if(this._scoresList[frame - 1] == null) {
    return "";
  } else {
    return this._calculateFrameTotal(frame);
  }
};
Scorecard.prototype._calculateFrameTotal = function(frame) {
  switch(this._scoresList[frame - 1].length) {
    case 1:
      return this._scoresList[frame - 1][0];
    case 2:
      return this._scoresList[frame - 1][0] +
        this._scoresList[frame - 1][1];
    case 3:
      if(this._scoresList[frame - 1][2] === "S") {
        return "S";
      } else if(this._scoresList[frame - 1][2] === "sp") {
        return "sp"
      } else {
        var total = this._scoresList[frame - 1][0] +
          this._scoresList[frame - 1][2];
        if(this._scoresList[frame - 1][1] != null) {
          total += this._scoresList[frame - 1][1];
        }
        return total;
      }
  }
};
