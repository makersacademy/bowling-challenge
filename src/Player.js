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
    this.secondRoll(frameNumber)
  }
  this.rollCount++
};

Player.prototype.firstRoll = function (frameNumber) {
  var roll = this.rollScoreGenerator(10);
  this.currentFrame = new Frame(roll, frameNumber);
};

Player.prototype.secondRoll = function (frameNumber) {
  var pinsLeft = this.currentFrame.wipePins()
  var roll = this.rollScoreGenerator(pinsLeft);
  this.playerSS.scoreCard[frameNumber] = this.currentFrame.update(roll);
};

Player.prototype.rollScoreGenerator = function(pins){
  return Math.floor(Math.random() * (pins + 1));
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
