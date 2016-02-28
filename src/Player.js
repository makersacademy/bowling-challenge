function Player (playerName, game) {
  this.playerScoreSheet = game || new ScoreSheet (this);
  this.playerName = playerName;
}


Player.prototype.roll = function () {
  var pinsAvailable = this.playerGame.currentPinsAvailable;
  if (this.rollCount === 0) {
    this.playerGame.new Frame(this.rollScoreGenerator(pinsAvailable));
  } else {
    this.playerGame.finishFrame(this.rollScoreGenerator(pinsAvailable));
  }
  this.rollCount += 1
  this.resetRollCount()
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
