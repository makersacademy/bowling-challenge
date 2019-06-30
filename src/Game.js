'use strict';

function Game() {
  this.allowedFrames = 10;
  this.frames = [];
  this.scoreBoard = [];
  // [{rollOne: 5, rollTwo: 4, strike = false, 
  // spare = false, points: = 9}, {}];
};

Game.prototype.addFrame = function() {
  if(this.allowedFrames != 0) {
    var frame = new Frame();
    this.frames.push(frame);
    this.allowedFrames--;
  } else {
    return "NOPE";
  };
};

Game.prototype.launchGame = function() {
  for(var i = this.allowedFrames; i > 0; i--) {
    this.addFrame();
  };
};

Game.prototype.updateScoreboard = function() {
  for(var i = this.scoreBoard.length(); i >= 0; i--)
    var frame = this.frames[i - 1];
    var previousFrame = this.frames[i - 2];
    if(previousFrame.isStrike()) {
      previousFrame.points = previousFrame.points + frame.points;
    } else if(previousFrame.isSpare()) {
      previousFrame.points = previousFrame.points + frame.rollOne;
    }
  // var scoreOne = 0;
  // var scoreTwo = 0;
  // var scoreTotal = 0;
  // for(var i = this.frames; i < 10; i--) {
  //   scoreOne = this.scoreBoard[i]['rollOne'];
  //   scoreTwo = this.scoreBoard[i]['rollTwo'];
  // }
  // ¯\_(ツ)_/¯
}

Game.prototype.play = function() {
  for(var i = 0; i < 10; i++) {
    var frame = this.frames[i];
    var rollOne = frame.receiveRollOne(num);
    if(rollOne === "ROLL AGAIN") {
      frame.receiveRollTwo();
    } else {
      this.scoreBoard.push(frame);
      updateScoreboard();
    };
  };
};

// Game.prototype.scoreSimpleFrame = function(frame) {
//   if(this.frames.length() > 0 && this.bonus >= 2) {
//     var i = this.frames.findIndex(frame);
//     var move = this.frames[i-1];
//     move.points = move.points + frame.points;
//     this.bonus -= 2;
//     updateScoreboard();
//   } else if(this.frames.length() > 0 && this.bonus == 1) {
//     var i = this.frames.findIndex(frame);
//     var move = this.frames[i-1];
//     move.points = move.points + frame.rollOne;
//     this.bonus--;
//     updateScoreboard();
//   } else {
//     updateScoreboard();
//   };
// };
