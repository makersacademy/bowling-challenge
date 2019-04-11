// 'use strict';

function Game() {
  this.complete = false;
  this.frames = [];
  this.bonuses = [];
}

Game.prototype.recordBall = function(score) {

  if(this.complete === true) { return this.frames; }

  if (this.frames.length === 0) {
    // very first ball
    this.frames.push(createNewFrame(score));

    bonus = checkForBonusScore(score, this.frames, this.bonuses);
    if (bonus) { this.bonuses.push(bonus); };
    // no need to calculate bonus points as this is only on the first ball
    return this;
  }

  if (this.frames.slice(-1)[0].isComplete() == false) {
    addToFrame(score, this.frames.slice(-1)[0]);
    this.complete = checkEndOfGame(this.frames);

    calculateBonusPoints(score, this.frames, this.bonuses);
    bonus = checkForBonusScore(score, this.frames, this.bonuses);
    if (bonus) { this.bonuses.push(bonus); };
    return this;
  }
  else {
    this.frames.push(createNewFrame(score));
    this.complete = checkEndOfGame(this.frames);

    calculateBonusPoints(score, this.frames, this.bonuses);
    bonus = checkForBonusScore(score, this.frames, this.bonuses);
    if (bonus) { this.bonuses.push(bonus); };
    return this;
  }

  function createNewFrame(score) {
    let frame = new Frame();
    return frame.recordScore(score);
  }

  function addToFrame(score, frame) {
    frame.recordScore(score);
  }

  function checkEndOfGame(frames) {
    if (frames.length === 10 && frames.slice(-1)[0].isComplete() == true) {
      return true;
    } else { return false; }
  }

  function checkForBonusScore(score, frames, bonuses) {
    let lastFrame = frames.slice(-1)[0]
    if (lastFrame.frameTotal === 10){
      // spare or strike
      return createBonus(lastFrame, bonuses, frames.length-1);
    }
  }

  function createBonus(frame, bonuses, frameNumber) {
    let type = "";
    if (frame.balls[1]) { type = "spare"; }
    else { type = "strike"; }

    return {bonusType: type, frameScored: frameNumber};
  }

  function calculateBonusPoints(score, frames, bonusList) {
    for(let i = 0; i<bonusList.length; i++){
      let bonusItem = bonusList[i]
      if (bonusItem['bonusType'] == "strike") {
        console.log(frames);
        if (bonusItem['bonusPoints']) {
          frames[bonusItem['frameScored']].frameTotal += bonusItem['bonusPoints'] + score;
          console.log(bonusList);
          bonusList.splice(i, 1);
          console.log(bonusList);

        } else {
          bonusItem['bonusPoints'] = score;
        }
      } else if (bonusItem['bonusType'] == "spare") {
        frames[bonusItem['frameScored']].frameTotal += score;
        // bonusList.pop(bonusItem);
        bonusList.splice(i, 1);
        // bonusList.shift;


      }
    }
  }
};

Game.prototype.isComplete = function() {
  return this.complete;
};

Game.prototype.calculateTotal = function() {
  let total = 0;
  for(let i=0; i<this.frames.length; i++){
    let frame = this.frames[i];
    total += frame.frameTotal;
  }
  return total;
}
