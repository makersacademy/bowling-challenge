function Game() {
  this._frames = {'1':{'pins':0,'roll':0}, '2':{'pins':0,'roll':0},
                  '3':{'pins':0,'roll':0}, '4':{'pins':0,'roll':0},
                  '5':{'pins':0,'roll':0}, '6':{'pins':0,'roll':0},
                  '7':{'pins':0,'roll':0}, '8':{'pins':0,'roll':0},
                  '9':{'pins':0,'roll':0}, '10':{'pins':0,'roll':0}}
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
  this.updateRollCounts()
  this.updateFrameStats(score)
  if(this._frameRollNumber === 3) { this._frameRollNumber = 1}
  if(this._frameRollNumber === 2 || score === 10) { this._currentFrame ++ }
}

Game.prototype.frameScore = function(frameNumber) {
  return this._frames[frameNumber]['pins']
}

Game.prototype.currentFrame = function() {
  return this._currentFrame
}

Game.prototype.totalScore = function() {
  self = this
  var score = 0
  var frame = 0
  for (var i = 0; i < 10; i++) {
    frame ++
    score += self.frameScore(frame)
  }
  return score
}

Game.prototype.updateRollCounts = function() {
  this._frameRollNumber ++
  this._totalRolls ++
}

Game.prototype.updateFrameStats = function(score) {
  this._frames[this._currentFrame]['pins'] += score
  this._frames[this._currentFrame]['rolls'] += this._totalRolls
}



