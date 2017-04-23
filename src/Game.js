'use strict';

function Game() {
  this._frames = []
  this.scores = []
}

Game.prototype.addframe = function(frame) {
  this._frames.push(frame)
}

Game.prototype.spareBonus = function(index) {
  return this._frames[index+1].firstBowl()
}

Game.prototype.strikeBonus = function(index) {
  if(this._frames[index+1].outcome() === 'X') {
    return this._frames[index+1].firstBowl() + this._frames[index+2].firstBowl()
  } else {
    return this._frames[index+1].firstBowl() + this._frames[index+1].secondBowl()
  }
}

Game.prototype.calculateScore = function(index) {
  if(this._frames[index].outcome() === 'X') {
    return this._frames[index].firstBowl() + this.strikeBonus(index)
  } else if(this._frames[index].outcome() === '/') {
    return this._frames[index].firstBowl() + this._frames[index].secondBowl() +
    this._frames[index+1].firstBowl()
  } else { return this._frames[index].firstBowl() +
    this._frames[index].secondBowl()
  }
}

Game.prototype.calculateScores = function() {
  this.scores = []
  var i;
  var a = this._frames;
  for (i = 0; i < a.length; ++i) {
    this.scores.push(this.calculateScore(i))
  }
}

Game.prototype.complete = function(bonusFrame) {
  if(this._frames[8].outcome() === 'X' || this._frames[9].outcome() === 'X' || this._frames[9].outcome() === '/') {
    return this._frames.push(bonusFrame)
  } else if(this._frames.length >= 10) {return 'Game Finished'}
}
