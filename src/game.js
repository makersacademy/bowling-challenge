'use strict';

function Game(){
  this._score = []
  this._frameNumber = 1
  this._rollsThisFrame = 0
  this._playing = true
}

Game.prototype.roll = function(pinsKnockedDown){
  if (this._frameNumber == 10){
    this.rollTenthFrame(pinsKnockedDown)}
  else {
    this.rollNormalFrame(pinsKnockedDown)}
}

Game.prototype.rollNormalFrame = function(pinsKnockedDown){
  if (pinsKnockedDown == 10) {
    this._score.push(pinsKnockedDown)
    this.resetPins()
  }
  else if (this._rollsThisFrame == 1){
    this._score.push(pinsKnockedDown)
    this.resetPins()
  }
  else{
    this._score.push(pinsKnockedDown)
    this._rollsThisFrame += 1}
}

Game.prototype.rollTenthFrame = function(pinsKnockedDown){
  if (this._rollsThisFrame == 0) {
    this._score.push(pinsKnockedDown)
    this._rollsThisFrame += 1
  }
  else if ((this._rollsThisFrame == 1) && (this._score.slice(-1) + pinsKnockedDown >= 10)){
    this._score.push(pinsKnockedDown)
    this._rollsThisFrame += 1
  }
  else if ((this._rollsThisFrame == 1) && (this._score.slice(-1) + pinsKnockedDown <= 9)){
    this._score.push(pinsKnockedDown)
    this._playing = false
  }
  else if (this._rollsThisFrame == 2) {
    this._score.push(pinsKnockedDown)
    this._playing = false
  }

}

Game.prototype.score = function(){
  return this._score
}

Game.prototype.resetPins = function(){
  this._frameNumber += 1
  this._rollsThisFrame = 0
}
