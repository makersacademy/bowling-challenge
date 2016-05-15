function Game() {
  this._frames = {'1':{'r1':0,'r2':0}, '2':{'r1':0,'r2':0}, '3':{'r1':0,'r2':0},
                  '4':{'r1':0,'r2':0}, '5':{'r1':0,'r2':0}, '6':{'r1':0,'r2':0},
                  '7':{'r1':0,'r2':0}, '8':{'r1':0,'r2':0}, '9':{'r1':0,'r2':0},
                  '10':{'r1':0,'r2':0}}
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
  if(this._frameRollNumber === 3) { this._frameRollNumber = 1}
  this.updateFrameScore(score)
  if(this._frameRollNumber === 2 || score === 10) { this._currentFrame ++ }
}

Game.prototype.frameScore = function(frameNumber) {
  return (this._frames[frameNumber]['r1'] + this._frames[frameNumber]['r2'])
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

Game.prototype.updateFrameScore = function(score) {
  if(this._frameRollNumber === 1) {this._frames[this._currentFrame]['r1'] = score}
  if(this._frameRollNumber === 2) {this._frames[this._currentFrame]['r2'] = score}
}

Game.prototype.updateRollCounts = function() {
  this._frameRollNumber ++
  this._totalRolls ++
}



