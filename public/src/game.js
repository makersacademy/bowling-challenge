function Game(){
  this.round = 1
  this.frame = 1
  this.roll  = 1
  this.round_score = 0
  this.total_score = 0
}

Game.prototype.play = function(number){
  // updates round score
  this.round_score += number
  this.roll++
  this.round++
}

Game.prototype.isRoundFinished = function(){
  return this._allPinsCleared() || this._bothRollsPlayed()
}

Game.prototype.isStrike = function(){
  return this._allPinsCleared() && !this._bothRollsPlayed()
}

Game.prototype.isSpare = function(){
  return this._allPinsCleared() && this._bothRollsPlayed()
}

Game.prototype._allPinsCleared = function(){
  return this.round_score == 10
}

Game.prototype._bothRollsPlayed = function(){
  return this.roll > 2
}

Game.prototype.endTurn = function(){
  if (this.isRoundFinished()){
    this._updateFrame()
    this._updateScore()
  }
}

Game.prototype._updateFrame = function(){
  this.frame++
  this.roll = 1
}

Game.prototype._updateScore = function(){
  this.total_score += this.round_score
  this.round_score = 0
}

Game.prototype.isEndGame = function(){
  return this.frame > 10 ? true : false
}

Game.prototype.bowlingAPI = function(){
  return {frame: this.frame, roll: this.roll,
          knocked: this.round_score, turn: this.round,
          score: this.total_score, notes: "test"}
}

// isEndGame
//
// listenStrike
//
// listenSpare
