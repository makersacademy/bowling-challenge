function strict(){}

function Bowling() {
  this._frames = [];
  this.frameScore = [];
  this._score = 0;
}

Bowling.prototype.throwBall = function(pins) {
  this.frameScore.push(pins);
  if (this.frameScore.length == 2 || this.frameScore[0] == 10){
    this._frames.push(this.frameScore);
    this.frameScore = [];
  }
};

Bowling.prototype.currentFrame = function() {
  return this._frames.length + 1;
}

Bowling.prototype.calculateScore = function() {
  var self = this;
  self._score = 0;
  if (self._frames.length > 0){
    self._frames.forEach(function(frames,i){
      if(self.isStrike(frames)){
        self.strikeScore(i)
      }else if(self.isSpare(frames)){
          self.spareScore(i)
        }else{
      self._score += frames[0] + frames[1];
      }
    });
  }
  return self._score
};
Bowling.prototype.getScore = function() {
  return this._score;
}

Bowling.prototype.isSpare = function(frames){
  if(frames[0] < 10 && frames[0] + frames[1] === 10){
      return true
  }
  return false
};

Bowling.prototype.isStrike = function(frames){
  if(frames[0] === 10){
    return true
  }
  return false
}

Bowling.prototype.spareScore = function(index){
  if(this._frames[index + 1]){
    this._score += this._frames[index][0] + this._frames[index][1]+ this._frames[index + 1][0]
  }else{
    this._score += this._frames[index][0] + this._frames[index][1]
  }
}

Bowling.prototype.strikeScore = function(index){
  if(index < 10){
    if(this._frames[index + 1]){
      if(this._frames[index + 1][0] === 10){
          this._score += this._frames[index][0] + this._frames[index + 1][0]+ this._frames[index + 2][0]
      }else{
        this._score += this._frames[index][0] + this._frames[index + 1][0]+ this._frames[index + 1][1]
      }
    }
    else{
      this._score += this._frames[index][0]
    }
  }else{
    this._score = this._score
  }
}

Bowling.prototype.isOver = function () {
  if(this._frames.length === 10 && this._frames[10][0] + this._frames[10][1] < 10){
    return true
  }else if(this._frames.length === 11 && this._frames[10][0] != 10){
    return true
  }else if (this._frames.length === 12 && this._frames[10][0] === 10){
    return true
  }else{
    return false
  }
};
