function Game() {
  this._frameScore = 0
  this._totalScore = 0
  this._rollCount = 0
  this._frameNumber = 0
  this._strike = null
}

Game.prototype.roll = function(score) {
  if(this.isFrameComplete()) { throw Error('Cannot Roll: Frame complete')}
  if(this.isStrikeAchived()) { throw Error('Cannot Roll: Frame complete, you got a Strike!')}
  if(score === 'X') { this._strike = true}
  this._frameScore += score
  this._rollCount ++
}

Game.prototype.frameScore = function() {
  return this._frameScore
}

Game.prototype.isFrameComplete = function() {
  if(this._rollCount === 2) { return true }
}

Game.prototype.isStrikeAchived = function() {
  if(this._strike) { return true }
}

Game.prototype.newFrame = function() {
  this._totalScore += this._frameScore
  this._frameScore = 0
  this._rollCount = 0
  this._frameNumber ++
}

Game.prototype.frameNumber = function() {
  return this._frameNumber
}

Game.prototype.totalScore = function() {
  return this._totalScore
}



Game.prototype.errorCheck = function() {
  if(this.isFrameComplete()) { throw Error('Cannot Roll: Frame complete')}
  if(this.isStrikeAchived()) { throw Error('Cannot Roll: Frame complete, you got a Strike!')}
}