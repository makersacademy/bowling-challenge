'use strict';

class BowlingScorecard {
  constructor() {
    this.total_score = 0;
    this.currentFrame = 1;
    this.currentFrameRolls = 0;
    this.scorecard = { 1: [] }
  }

recordRoll(userInput) {
  this._checkUserInput(userInput);
  // WIP to end game if 10th frame score < 10 after two rolls
  if (this.currentFrame == 10 && this.currentFrameRolls == 2) {
    // if (this.frameScore(10) < 10 ) 
      throw "Game is finished"
    }

  this.currentFrameRolls += 1;
  this.total_score += userInput;

  this.scorecard[this.currentFrame].push(userInput);

  if (this.currentFrameRolls == 2 && this.currentFrame != 10) {
    this.newFrameNoBonus()
  }

}

frameScore(frame) {
  let score = 0
  const frame_array = this.scorecard[frame]  
  for(let i=0; i < frame_array.length; i++) {
    // if (frame_array[i] == 1) {return frame_array[i]}  
    score += frame_array[i]
  }
  return score
}

_checkUserInput(userInput) {
  if (isNaN(userInput)) {throw "Can only record numbers"}
  else if (userInput > 10 || userInput < 0) {throw "Scores must be 0-10"}
}


totalScore() {
  return this.total_score;
}

newFrameNoBonus() {
  this.currentFrame += 1
  this.scorecard[this.currentFrame] = []
  this.currentFrameRolls = 0
}

}