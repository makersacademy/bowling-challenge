function Player (playerName, scoreSheet, frame) {
  this.playerSS = scoreSheet || new ScoreSheet (this);
  this.playerName = playerName;
  this.rollCount = 0;
  this.currentFrame = frame
}

Player.prototype.roll = function () {
  var frameNumber = 1 + (this.rollCount /2);
  if (frameNumber >= 10){
    return this.playerSS.gameOver();
  } else if (this.rollCount % 2 === 0) {
    this.firstRoll(frameNumber)
  } else {
    this.secondRoll(Math.floor(frameNumber))
  }
  this.rollCount++
};

Player.prototype.firstRoll = function (frameNumber) {
  var roll = this.rollScoreGenerator(10);
  this.currentFrame = new Frame(roll, frameNumber, this.playerSS);
  if (roll === 10)
    { this.strikeCase(frameNumber) }
  if (this.playerSS.spareRollOwed.length !== 0)
    { roll = this.playerSS.updateSpare(roll)}
};

Player.prototype.strikeCase = function (frameNumber) {
  this.currentFrame.update('pending');
  this.rollCount++;
  this.playerSS.scoreCard[frameNumber] = this.currentFrame.rollScores;
  this.playerSS.consecutiveStrikes++;
};

Player.prototype.secondRoll = function (frameNumber) {
  var roll = this.rollScoreGenerator(this.currentFrame.pinsAvailable);
  this.currentFrame.update(roll);
  this.playerSS.scoreCard[frameNumber] = this.currentFrame.rollScores;
  if (this.playerSS.consecutiveStrikes > 0) {
    this.playerSS.factorInStrike(frameNumber);
  }
};

Player.prototype.rollScoreGenerator = function(pinsLeft){
  return Math.floor(Math.random() * (pinsLeft + 1));
};


Player.prototype.showScoreSheet = function () {
  var scoreSheetRaw = this.playerSS.scoreCard;
  var frames = [];
  var frameScores = [];
  for (var key in scoreSheetRaw) {
    frames.push(key);
    frameScores.push(scoreSheetRaw[key]);
  }
  var readableFrameScores = [].concat.apply([], frameScores);
  return console.log(readableFrameScores);
};
