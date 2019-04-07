// 'use strict';

function Game() {
  this.complete = false;
  this.frames = [];
  this.bonuses = [];
}

Game.prototype.recordBall = function(score) {

  if(this.complete === true) { return this.frames; }

  if (this.frames.length === 0) {
    this.frames.push(createNewFrame(score));

    // bonus = checkForBonusScore(score, this.frames, this.bonuses);
    // if (bonus) { this.bonuses.push(bonus); };
    // calculateBonusPoints(score, this.frames, this.bonuses);
    return this;
  }

  if (this.frames.slice(-1)[0].isComplete() == false) {
    addToFrame(score, this.frames.slice(-1)[0]);
    this.complete = checkEndOfGame(this.frames);

    // bonus = checkForBonusScore(score, this.frames, this.bonuses);
    // if (bonus) { this.bonuses.push(bonus); };
    // calculateBonusPoints(score, this.frames, this.bonuses);
    return this;
  }
  else {
    this.frames.push(createNewFrame(score));
    this.complete = checkEndOfGame(this.frames);

    // bonus = checkForBonusScore(score, this.frames, this.bonuses);
    // if (bonus) { this.bonuses.push(bonus); };
    // calculateBonusPoints(score, this.frames, this.bonuses);
    return this;
  }

  function checkForBonusScore(score, frames, bonuses) {
    let lastFrame = frames.slice(-1)[0]

    if (lastFrame.frameTotal === 10){
      // spare or strike
      return createBonus(lastFrame, bonuses, frames.length);
    }
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

  function createBonus(frame, bonuses, frameNumber) {
    let type = "";
    if (frame.balls[1]) {
      type = "spare";
    }
    else {
      type = "strike";
    }
    return {bonusType: type, frameScored: frameNumber};
  }

  function calculateBonusPoints(frames, bonusList, score) {
    if (bonusList.length > 0){
      for(let i = 0; i<bonusList.length; i++){
        let bonusItem = bonusList[i]
        if (bonusItem['bonusType'] == "strike") {
          if (bonusItem['bonusPoints']) {
            frames[bonusItem['frameNumber']].frameTotal += bonusItem['bonusPoints'] + score;
            bonusList.pop(bonusItem);
          } else {
            bonusItem['bonusPoints'] = score;
          }
        }
      }
    }
  }
  //
	// If bonusType == spare
	// 	// yes
	// 	addBonusToFrame(frame, score)
	// 	pop off array
  //
  //   }
  // }

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
