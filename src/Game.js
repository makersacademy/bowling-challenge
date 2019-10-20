function Game() {
  this._score = 0;
  this._bowls = []
  this._frames = [];
  this._frame = {};
  this._frameBowls = [0,0];
  this._frameScore = 0;
  this._frameBonus = [0,0];
  this._frameComplete = false
  this._frameType = 'normal'
  this._frameMove = 0;
  this._frameNumber = 1;
};

Game.prototype.add = function(pins) {
  this._frameBowls[this._frameMove] = pins
  // this._frames[this._frameNumber - 2].frameBowls[this._frameMove] = pins
  this._frameMove +++1
  if (this.isStrike() || this._frameMove === 2) {
      this.nextTurn()
      this._frameMove = 0
      this._frameNumber +++1
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
        console.log(Number(frame.frameScore))
        score += frame.frameScore
      }
     return this._score = score
}

Game.prototype.nextTurn = function(){
  this._frame['frameNumber'] = this._frameNumber
  this._frame['frameBowls'] = this._frameBowls
  this._frame['frameBonus'] = this._frameBonus
  this._frame['frameType'] = this._frameType
  this._frame['frameComplete'] = this._frameComplete
  this._frame['frameScore'] = this._frameScore
  this._frames[this._frameNumber-1] = this._frame
}