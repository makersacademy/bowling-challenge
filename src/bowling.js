

var Bowling = function(){
  this.gameFrames = []
  this.currentFrame = []
  this.pins = 10;
  this.totalScore = 0;
  this.strikeBonus = [];
  this.strikePoints = false
  this.sparePoints = false
}

Bowling.prototype.roll = function(){
  if(this.firstRoll()){
  var points = Math.floor(Math.random()*this.pins+1)
  this.firstRollScore(points);
} else {
  var points = Math.floor(Math.random()*this.remainingPins()+1)
  this.secondRollScore(points);
  }
};

Bowling.prototype.firstRollScore = function(points){
  if(this.strike(points)){
    this.currentFrame.push(points, 0);
    this.totalScoreUpdate(points)
    this.saveFrame();
    // this.setStrikePoints()
  } else {
    this.currentFrame.push(points);
    this.totalScoreUpdate(points)
    // this.applyBonusPoints(points);
  }
}

Bowling.prototype.secondRollScore = function(points) {
  this.currentFrame.push(points);
  this.totalScoreUpdate(points)
  if(this.spare()){
    this.sparePointStart();
  }
  this.saveFrame();
}

Bowling.prototype.remainingPins = function(){
  return this.pins - this.currentFrame[0];
}

Bowling.prototype.strike = function(points){
  return points === this.pins
}

Bowling.prototype.spare = function(points){
  var frameScore = this.sumFrame(this.currentFrame);
  return frameScore === this.pins
}

Bowling.prototype.saveFrame = function(){
  this.gameFrames.push(this.currentFrame)
  this.currentFrame = []
}

Bowling.prototype.firstRoll = function(){
  return this.currentFrame.length === 0
}

Bowling.prototype.frameNumber = function(){
  return this.gameFrames.length
}

Bowling.prototype.sumFrame = function(array){
  var total = 0
  for (var i = 0; i < array.length; i++) {
      total = total + array[i];
  }
  return total;
}

Bowling.prototype.totalScoreUpdate = function(points){
  this.totalScore += points;
  if (this.sparePoints){
    this.sparePointsScoring(points);
  }
  if (this.strikePoints){
    this.strikePointsSet(points);
  }
  if (this.strikeBonus.length > 0) {
    this.strikeBonusPointsApply(points);
  }
  if (this.strike(points)){
    this.strikePointStart();
    // this.strikePointsSet(points);
  }
  }

Bowling.prototype.sparePointsScoring = function (points) {
  this.totalScore += points
  this.sparePointEnd();
};

Bowling.prototype.sparePointStart = function () {
  this.sparePoints = true;
};

Bowling.prototype.sparePointEnd = function () {
  this.sparePoints = false
};

Bowling.prototype.strikePointStart = function () {
  this.strikePoints = true;
};

Bowling.prototype.strikePointEnd = function(){
  if(this.strikeBonus.length === 0){
    this.strikePoints = false;
  }
}

Bowling.prototype.strikePointsSet = function(points){
  this.strikeBonus.push(points)
}


Bowling.prototype.strikeBonusPointsApply = function(points){
      this.totalScore += this.strikeBonus[0]
      if(this.strikeBonus.length >= 2){
        this.totalScore += this.strikeBonus[1]
        this.strikeBonus =  this.strikeBonus.slice(1, this.strikeBonus.length)
        this.strikePointEnd();
      }

    // }
  }
