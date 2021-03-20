'use strict';

class BowlingScorecard {
  constructor() {
    this.frame = 1;
    this.rollsInFrame = 0;
    this.scorecard = { 1: [] }
    this.bonusQueue = {}
  }

currentFrame() {
  return this.frame;
}

recordRoll(userInput) {
  this._checkUserInput(userInput);

  if (this.scorecard[10] && this.scorecard[10].length == 3) {
    throw "Game is finished"}

  this.rollsInFrame += 1;
  this.processBonuses(userInput);
  
  if (frameFinishedNoBonus()) {this.startNewFrame(1)};

  this.scorecard[this.frame].push(userInput);
  if (this.totalScore == 300) {return "Perfect Game!"}

  processSpares()
  processStrikes()

  if (frameTenNoBonus()) {
    this.scorecard[10].push(0)
    if (this.totalScore() == 0) 
      {return "Gutter Game!"}
  }
}

processSpares() {
  if (this.spare() && this.frame != 10) {
    this.addToBonusQueue(this.frame, 1)
    this.startNewFrame(0)
  }
  else if (this.spare() && this.frame != 10) {
    this.addToBonusQueue(this.frame, 1)
    this.rollsInFrame = 0 
  }
}

processStrikes() {
  if (this.strike() && this.frame != 10) {
    this.addToBonusQueue(this.frame, 2)
    this.startNewFrame(0)
  }
  else if (this.strike() && this.frame == 10) {
    AddToBonusQueue(this.frame, 0)
    this.rollsInFrame = 0
  }
}


processBonuses(bonusScore) {
  let queue = this.bonusQueue.filter(function (bonus) {
    return bonus.rollsLeft > 0
  },
  Object.keys(this.scorecard).forEach(function (frame) { 
      this.scorecard[frame].push(bonusScore)
      this.bonusQueue[frame][rollsLeft] -= 1
  })
  )}


addToBonusQueue(frame, rollsLeft) {
  this.bonusQueue[this.frame] = { rollsLeft: rollsLeft}
}

startNewFrame(rolls) {
  this.currentFrame += 1
  this.scorecard[this.currentFrame] = []
  this.rollsInFrame = rolls
}

frameScore(frameNumber) {
  if (this.scorecard[frameNumber] == false) 
    {throw "Score for" + frameNumber + "unavailable"}
  else {
    let score = 0
    const frame_array = this.scorecard[frame]  
    for (let i=0; i < frame_array.length; i++) {
      score += frame_array[i]
    }
  return score
  }
}

totalScore() {
  let sum = 0 
  for (var keys in this.scorecard) {
    vals = this.scorecard[keys]; // gets array of scores
    for (var i = 0; i < vals.length; i++) {
        sum += vals[i] || 0; //in case of NaN issues
    }
}
}

spare() {
  this.rollsInFrame == 2 && this.frameScore(this.frame) == 10 &&
  this.scorecard[this.frame][0] != 10
  // Check first score of frame was not 10
}

strike() {
  this.rollsInFrame == 1 && this.frameScore(this.frame) == 10
}
frameFinishedNoBonus() {
  this.rollsInFrame == 3 && this.frame != 10
}
frameTenNoBonus() {
  this.rollsInFrame == 2 && this.frame == 10 && this.frameScore(10) < 10
}

_checkUserInput(userInput) {
  if (isNaN(userInput)) {throw "Can only record numbers"}
  else if (userInput > 10 || userInput < 0) {throw "Scores must be 0-10"}
}

}