function Player (playerName, scoreSheet, frame) {
  this.playerSS = scoreSheet || new ScoreSheet (this);
  this.playerName = playerName;
  this.rollCount = 0;
  this.currentFrame = frame
}

Player.prototype.roll = function () {
  var frameNumber = 1 + (this.rollCount /2);
  if (this.rollCount % 2 === 0) {
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
    { this.strikeCase() }
  if (this.playerSS.spareRollOwed !== null)
    { roll = this.playerSS.updateSpare(roll)}
};

Player.prototype.strikeCase = function () {
  this.currentFrame.update('pending');
  this.rollCount++;
  this.playerSS.consecutiveStrikes(this.currentFrame);
};

Player.prototype.secondRoll = function (frameNumber) {
  var pinsLeft = this.currentFrame.pinsAvailable
  var roll = this.rollScoreGenerator(pinsLeft);
  this.currentFrame.update(roll)
  this.playerSS.scoreCard[frameNumber] = this.currentFrame.rollScores;
};

Player.prototype.rollScoreGenerator = function(pinsLeft){
  return Math.floor(Math.random() * (pinsLeft + 1));
};




// Player.prototype.roll = function () {
//   var pinsAvailable = this.playerGame.currentPinsAvailable;
//   if (this.rollCount === 0) {
//     this.playerGame.new Frame(this.rollScoreGenerator(pinsAvailable));
//   } else {
//     this.playerGame.finishFrame(this.rollScoreGenerator(pinsAvailable));
//   }
//   this.rollCount += 1
//   this.resetRollCount()
// };
//


//
//
//
// Player.prototype.showScoreSheet = function () {
//   var scoreSheetRaw = this.playerGame.scoreSheet;
//   var frames = [];
//   var frameScores = [];
//   for (var key in scoreSheetRaw) {
//     frames.push(key);
//     frameScores.push(scoreSheetRaw[key]);
//   }
//
//   var readableFrameScores = [].concat.apply([], frameScores);
//
//   return console.log(readableFrameScores);
//
// };
