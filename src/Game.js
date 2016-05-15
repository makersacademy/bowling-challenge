function Game() {
  this._frames = {'1':0, '2':0, '3':0, '4':0, '5':0,
                  '6':0, '7':0, '8':0, '9':0, '10':0}
  this._frameRollNumber = 0
  this._currentFrame = 1
  this._totalRolls = 0
}

Game.prototype.rollNumber = function() {
  return this._frameRollNumber
}

Game.prototype.totalRolls = function() {
  return this._totalRolls
}

Game.prototype.roll = function(score) {
  this._frames[this._currentFrame] += score
  this._frameRollNumber ++
  this._totalRolls ++
  if(this._frameRollNumber === 3) { this._frameRollNumber = 1}
  if(this._frameRollNumber === 2 || score === 10) { this._currentFrame ++ }
}

Game.prototype.frameScore = function(frameNumber) {
  return this._frames[frameNumber]
}

Game.prototype.currentFrame = function() {
  return this._currentFrame
}




