function Player (playerName, game) {
  this.playerGame = game || new Game (this);
  this.playerName = playerName;
  this.rollCount = 0
}


Player.prototype.roll = function () {
  var pinsAvailable = this.playerGame.currentPinsAvailable;
  if (this.rollCount === 0) {
    this.playerGame.newFrame(this.rollScoreGenerator(pinsAvailable));
  } else {
    this.playerGame.finishFrame(this.rollScoreGenerator(pinsAvailable));
  }
  this.rollCount += 1
  this.resetRollCount()
};


Player.prototype.isFrameOver = function () {
  return this.rollCount === 2 || this.playerGame.pinsAvailable === 0;
};

Player.prototype.resetRollCount = function () {
  if (this.isFrameOver()){
    this.rollCount = 0
  } else {
    this.rollCount = 1
  }
};

Player.prototype.rollScoreGenerator = function(pins){
  return Math.floor(Math.random() * (pins + 1));
};



Player.prototype.showScoreSheet = function () {
  var scoreSheetRaw = this.playerGame.scoreSheet;
  var frames = [];
  var frameScores = [];
  for (var key in scoreSheetRaw) {
    frames.push(key);
    frameScores.push(scoreSheetRaw[key]);
  }

  var readableFrameScores = [].concat.apply([], frameScores);

  return console.log(readableFrameScores);

};
