function Game() {
  this.gamePoints = [];
};

function Frame() {
  this.frameNumber = 0;
  this.framePoints = [];
};

function Turn() {
};

function Scoring() {
};

Game.prototype.start = function() {
  var frame = new Frame();
  this.gamePoints.push(frame.playFrame());
  return this.gamePoints;
};

Frame.prototype.playFrame = function() {
  var turn = new Turn();
  for (this.frameNumber = 1; this.frameNumber <= 10; this.frameNumber ++) {

    var score = [turn.playTurn(10)] //play first turn in the frame with all 10 pins

    if (this.frameNumber === 10 && score[0] === 10) {
      score.push(turn.playTurn(10)); //if there's a strike in the 10th frame, give another 10 pins for turn 2
      if (this.frameNumber === 10 && score[1] === 10) {
        score.push(turn.playTurn(10)); //then if there's a strike in that frame, give another 10 pins for turn 3
      }
      else {
        score.push(turn.playTurn(10 - score[1])); //if there wasn't a strike in the 10th frame, 2nd turn, then just give them whatever pins are left
      }
    }
    else {
      if (this.frameNumber === 10 && score[0] + score[1] === 10) {
        score.push(turn.playTurn(10)); //accounts for spare in the 10th frame turn 2: gives another 10 pins for turn 3
      }
      strike: if (score[0] === 10) {
        break strike;
      }
      else {
        score.push(turn.playTurn(10 - score[0])); // USUAL SCENARIO: play the second turn with 10 pins minus the number knocked down in the first turn
      }
    }
    this.framePoints.push(score);
  }
  return this.framePoints;
};

Turn.prototype.playTurn = function(pins = 10) {
  return Math.floor(Math.random() * (pins - 0 + 1)); // random score between 0 and the number of pins left
};

Scoring.prototype.createScoreArray = function(gamePoints) {
  var tempTotal;
  var scoreArray = gamePoints[0].map(function(framePoints, indexOfElement, gamePointsArr) {
    var inheritedScore = indexOfElement === 0 ? 0 : tempTotal;
    var frameScores = [inheritedScore + framePoints[0]]; //needs "+ bonus"
    frameScores.push(frameScores[0] + framePoints[1]); //needs "+ bonus"
    tempTotal = frameScores[1];
    return frameScores;
  });
  return scoreArray;
};
