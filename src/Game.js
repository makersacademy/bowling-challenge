function Game() {
  this._score = 0;
  this._frames = [];
  this._bowls = [];
  this._bowlNumber = 1;
  this._frameBowls = [0,0];
  this._frameScore = 0;
  this._frameBonus = [0,0];
  this._frameComplete = false
  this._frameType = 'normal'
  this._frameMove = 0;
  this._frameNumber = 1;
  // frame = new Frame()
};

Game.prototype.add = function(pins) {
  // this.addBonus(pins)
  this._bowls.push(pins)
  this._frameBowls[this._frameMove] = pins
  this._frameMove +++1
  if (this.isStrike() || this._frameMove === 2) {
      this.nextTurn()
      this._frameMove = 0
      this._frameNumber +++1
      console.log(this._frames)
    }
}

Game.prototype.addBonus = function(pins){
  if (this._frameType != 'normal') {
    this._frames[this._frameNumber - 2].frameBonus[this._frameMove] = pins
  }
}

Game.prototype.isStrike = function() {
  if (this._frameBowls[0] === 10){
      this._frameType = 'strike'
      return true
    }
    else if (this._frameBowls[0] != 10 && this.frameScore() == 10){
      this._frameType = 'spare'
        return false
      }
      else {
        this._frameType = 'normal'
      return false
    }
}

Game.prototype.frameScore = function() {
  var frameScore = 0
  for (var i = 0; i < 2; i++) {
    frameScore += this._frameBowls[i]
    // frameScore += this._frames[this._frameNumber-2].frameBowls[i]
    this._frameScore = frameScore
  }
    return frameScore
}

Game.prototype.score = function() {
      var score = 0
      for (var i = 0; i < this._frameNumber-1; i++) {
        frame = this._frames[i]
        score += frame.frameScore
      }
     return this._score = score
}

Game.prototype.nextTurn = function(){
  var frame = {}
  frame['frameNumber'] = this._frameNumber
  frame['frameBowls'] = this._frameBowls
  frame['frameBonus'] = this._frameBonus
  frame['frameType'] = this._frameType
  frame['frameComplete'] = this._frameComplete
  frame['frameScore'] = this._frameScore
  this._frames.push(frame)
}