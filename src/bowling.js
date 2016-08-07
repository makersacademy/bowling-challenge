

var Bowling = function(){
  this.gameFrames = []
  this.currentFrame = []
  this.totalScore = 0;
  this.strikeBonus = [];
  this.strikePoints = false
  this.sparePoints = false
  STARTINGPINS = 10
}

Bowling.prototype.roll = function(){
  if(this.finalFrameCheck()) {
    this.finalFrame();
  } else if(this.firstRoll()) {
    var points = this.startingPinsKnocked();
    this.firstRollScore(points);
  } else {
    var points = this.remainingPinsKnocked();
    this.secondRollScore(points);
  }
};

Bowling.prototype.firstRollScore = function(points) {
  this.currentFrame.push(points, 0);
  this.totalScoreUpdate(points)
}

Bowling.prototype.secondRollScore = function(points) {
  this.currentFrame[1] = this.currentFrame[1] + points
  this.totalScoreUpdate(points)
  this.spare();
  this.saveFrame();
}

Bowling.prototype.remainingPins = function() {
  return STARTINGPINS - this.currentFrame[0];
}

Bowling.prototype.strike = function(points) {
  return points === STARTINGPINS;
}

Bowling.prototype.spare = function(points) {
  var frameScore = this.sumFrame(this.currentFrame);
  if (frameScore === STARTINGPINS) {
    this.sparePointStart();
  }
}

Bowling.prototype.saveFrame = function() {
  this.gameFrames.push(this.currentFrame)
  this.currentFrame = []
}

Bowling.prototype.firstRoll = function() {
    return this.currentFrame.length === 0
}

Bowling.prototype.frameNumber = function() {
  return this.gameFrames.length
}

Bowling.prototype.sumFrame = function(array) {
  var total = 0
  for (var i = 0; i < array.length; i++) {
      total = total + array[i];
  }
  return total;
}

Bowling.prototype.totalScoreUpdate = function(points) {
  this.totalScore += points;
  this.spareCheck(points);
  this.strikeCheck(points);
  }

Bowling.prototype.spareCheck = function(points) {
  if (this.sparePoints){
    this.sparePointsScoring(points);
  }
};

Bowling.prototype.strikeCheck = function(points) {
  if (this.strikePoints) {
    this.strikePointsSet(points);
  }
  if (this.strikeBonus.length > 0) {
    this.strikeBonusPointsApply(points);
  }
  if (this.strike(points)) {
    this.strikePointStart(points);
  }
};

Bowling.prototype.sparePointsScoring = function(points) {
  this.totalScore += points
  this.sparePointEnd();
};

Bowling.prototype.sparePointStart = function() {
  this.sparePoints = true;
};

Bowling.prototype.sparePointEnd = function() {
  this.sparePoints = false
};

Bowling.prototype.strikePointStart = function(points) {
  this.strikePoints = true;
  if(this.gameFrames.length < 9) {
    this.saveFrame();
  }
};

Bowling.prototype.strikePointEnd = function() {
  if(this.strikeBonus.length === 0) {
    this.strikePoints = false;
  }
}

Bowling.prototype.strikePointsSet = function(points) {
  this.strikeBonus.push(points)
}

Bowling.prototype.strikeBonusPointsApply = function(points) {
  this.totalScore += this.strikeBonus[0]
  if(this.strikeBonus.length >= 2) {
    this.totalScore += this.strikeBonus[1]
    this.strikeBonus =  this.strikeBonus.slice(1, this.strikeBonus.length)
    this.strikePointEnd();
    }
  }

Bowling.prototype.finalFrameCheck = function() {
  return this.gameFrames.length === 9;
}

Bowling.prototype.finalRollPins = function() {
  if(this.remainingPins() === 0) {
    return this.startingPinsKnocked();
  } else {
    return this.remainingPinsKnocked();
  }
};

Bowling.prototype.finalFrameRollFirst = function() {
    var points = this.startingPinsKnocked();
    this.currentFrame.push(points);
    this.totalScoreUpdate(points)
};

Bowling.prototype.finalFrameRollSecond = function() {
  var points = this.finalRollPins();
  this.currentFrame.push(points);
  this.totalScore += points*2
}

Bowling.prototype.finalFrameRollThird = function() {
  var points = this.startingPinsKnocked();
  this.currentFrame.push(points);
  this.totalScore += points
  this.saveFrame();
};

Bowling.prototype.finalFrame = function() {
  if(this.currentFrame.length === 0) {
    this.finalFrameRollFirst();
    } else if(this.currentFrame.length === 1) {
    this.finalFrameRollSecond();
    } else if(this.currentFrame.length === 2) {
    this.finalFrameRollThird();
  }
}

Bowling.prototype.startingPinsKnocked = function() {
  return Math.floor(Math.random()*STARTINGPINS+1);
};

Bowling.prototype.remainingPinsKnocked = function() {
  return Math.floor(Math.random()*this.remainingPins()+1)
};
