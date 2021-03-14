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

  this.currentFrameRolls += 1;
  this.total_score += userInput;

  this.scorecard[this.currentFrame].push(userInput);

  if (this.currentFrameRolls == 2) {
    this.currentFrame += 1
    this.scorecard[this.currentFrame] = []
    this.currentFrameRolls = 0
  }

}

frameScore(frame) {
  let frame_score = 0
  const frame_array = this.scorecard[frame]  
  for(let i=0; i < frame_array.length; i++) {
    frame_score += frame_array[i]
  }
  return frame_score
}

_checkUserInput(userInput) {
  if (isNaN(userInput)) {throw "Can only record numbers"}
  else if (userInput > 10 || userInput < 0) {throw "Scores must be 0-10"}
}


totalScore() {
  return this.total_score;
}

}