

var Bowling = function(){
  this.gameFrames = []
  this.currentFrame = []
  this.totalScore = 0;
  this.strikePoints = false
  this.strikeMultiPoints = false
  this.sparePoints = false
  this.latestRoll = 0
  this.strikesCount = 0
  STARTINGPINS = 10
}

Bowling.prototype.roll = function(){
  if(this.finalFrameCheck()) {
    this.finalFrame();
  } else if(this.firstRoll()) {
    this.firstRollScore();
  } else {
    this.secondRollScore();
  }
}

Bowling.prototype.firstRollScore = function() {
  var points = this.startingPinsKnocked();
  this.currentFrame.push(points, 0);
  this.totalScoreUpdate(points)
}

Bowling.prototype.secondRollScore = function() {
  var points = this.remainingPinsKnocked();
  this.currentFrame[1] = this.currentFrame[1] + points
  this.totalScoreUpdate(points)
  this.spare();
  this.saveFrame();
}

Bowling.prototype.strike = function(points) {
  return points === STARTINGPINS;
}


Bowling.prototype.saveFrame = function() {
  this.gameFrames.push(this.currentFrame)
  this.strikePointEnd();
  this.currentFrame = []
}

Bowling.prototype.firstRoll = function() {
  return this.currentFrame.length === 0
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
  this.latestRollUpdate(points);
  this.spareCheck(points);
  this.strikeCheck(points);
}

Bowling.prototype.spareCheck = function(points) {
  if (this.sparePoints){
    this.sparePointsScoring(points);
  }
}

Bowling.prototype.spare = function(points) {
  var frameScore = this.sumFrame(this.currentFrame);
  if (frameScore === STARTINGPINS) {
    this.sparePointStart();
  }
}

Bowling.prototype.sparePointsScoring = function(points) {
  this.totalScore += points
  this.sparePointEnd();
}

Bowling.prototype.sparePointStart = function() {
  this.sparePoints = true;
}

Bowling.prototype.sparePointEnd = function() {
  this.sparePoints = false
}

Bowling.prototype.strikeCheck = function(points) {
  if(this.strikePoints) {
    this.strikeBonusPointsApply(points);
  }
  this.strikePointsManager(points);
}

Bowling.prototype.strikePointsManager = function (points) {
  if (this.strike(points)) {
    this.strikePointStart();
    this.strikeCountManageUp();
  } else {
    this.strikeCountManageDown();
  }
};

Bowling.prototype.strikeCountManageUp = function () {
  if(this.strikesCount < 2) {this.strikesCount += 1}
  this.multiStrikeSet();
};

Bowling.prototype.strikeCountManageDown = function () {
  if(this.strikesCount > 0) {this.strikesCount -= 1}
  this.multiStrikeSet();
};

Bowling.prototype.multiStrikeSet = function () {
  if(this.strikesCount === 2) {
    this.strikeMultiPoints = true
  } else if (this.strikeMultiPoints === true && this.strikesCount === 1 ){
    this.strikeMultiPoints = false
  }
  }

Bowling.prototype.strikePointStart = function() {
  if (this.gameFrames.length < STARTINGPINS - 1) {
    this.strikePoints = true;
    this.saveFrame();
  }
}

Bowling.prototype.strikePointEnd = function() {
  if(this.currentFrame[0] < STARTINGPINS) {
    this.strikePoints = false;
  }
}

Bowling.prototype.strikeBonusPointsApply = function(points) {
  this.totalScore += points
  if (this.strikeMultiPoints) {
    this.totalScore += points;
  }
};

Bowling.prototype.finalFrame = function() {
  if (this.gameFrames.length === STARTINGPINS) {
      return ""
  } else if(this.currentFrame.length === 0) {
    this.finalFrameRollFirst();
  } else if(this.currentFrame.length === 1) {
    this.strikeMultiPoints = false
    this.finalFrameRollSecond();
  } else if(this.currentFrame.length === 2) {
    this.finalFrameRollThird();
  }
}

Bowling.prototype.finalFrameCheck = function() {
  return this.gameFrames.length >= STARTINGPINS - 1;
}

Bowling.prototype.finalRollPins = function() {
  if(this.remainingPins() === 0) {
    return this.startingPinsKnocked();
  } else {
    return this.remainingPinsKnocked();
  }
}

Bowling.prototype.finalFrameRollFirst = function() {
    var points = this.startingPinsKnocked();
    this.currentFrame.push(points);
    this.totalScoreUpdate(points)
}

Bowling.prototype.finalFrameRollSecond = function() {
  var points = this.finalRollPins();
  this.currentFrame.push(points);
  this.totalScoreUpdate(points);
  this.latestRollUpdate(points);
  if (this.sumFrame(this.currentFrame) < STARTINGPINS) {
    this.saveFrame();
  }
}

Bowling.prototype.finalFrameRollThird = function() {
  var points = this.bonusRollPins();
  this.currentFrame.push(points);
  this.totalScore += points
  this.latestRollUpdate(points);
  this.saveFrame();
}

Bowling.prototype.bonusRollPins = function(){
  if(this.bonusRollSpare() || this.bonusRollStrike()) {
    return this.startingPinsKnocked();
  } else {
    return Math.floor(Math.random()*(STARTINGPINS - this.currentFrame[1])+1)
  }
}

Bowling.prototype.bonusRollSpare = function() {
  return this.sumFrame(this.currentFrame) === STARTINGPINS;
}

Bowling.prototype.bonusRollStrike = function() {
  return this.strike(this.currentFrame[1]);
}

Bowling.prototype.startingPinsKnocked = function() {
  return Math.floor(Math.random()*STARTINGPINS+1);
}

Bowling.prototype.remainingPinsKnocked = function() {
  return Math.floor(Math.random()*this.remainingPins()+1)
}

Bowling.prototype.remainingPins = function() {
  return STARTINGPINS - this.currentFrame[0];
}

Bowling.prototype.latestRollUpdate = function(points) {
  this.latestRoll = points
}
