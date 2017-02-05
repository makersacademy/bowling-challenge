'use strict';

function Game() {
    this._frames = [];
    this._currentFrame = 0;
    // this._framesRemaining = 10;
    this._frame = new Frame();
    this._score = 0;

    // this._frameScores = [];
    // this._scorecard = [];
    // this._SPARE_BONUS = 1;
    // this._STRIKE_BONUS = 2;

}

Game.prototype.nextFrame = function() {
    this._currentFrame++;
    this._frame = new Frame();
    // if(!this.isEnded()) {
    //     this._frame = new Frame();
    // }
};

Game.prototype.bowl = function(pins) {
    // if(this.isEnded()) { throw new Error("The game has ended") }
    this._frame.turn(pins);
    this.endFrame();
};

Game.prototype.endFrame = function(scores) {
    if(this._frame.isEnded()) {
        this._frames.push(this._frame);
        this.nextFrame();
        // console.log(this._frames);
    }


    // if(this._currentFrame <= 10) {this._score += scores[0];}
    // this._frameScores.push(scores[1].join(","));
    // this._scorecard.push(scores[2].join(","));
    // this.bonusHandler(this._STRIKE_BONUS);
    // this.nextFrame();
};


Game.prototype.score = function() {
  var self = this;
  console.log(this);
  return this._frames.reduce(function(total, frame, index, frames){
    var bonus = 0;
    console.log("score:" + total);
    console.log("frame:" + frame);
    console.log("index:" + index);
    console.log("frames:" + frames);
    // debugger;
    console.log(index);
    if(frame.isStrike() && index < 9) {
      bonus = self.strikeBonus(frame, frames[index + 1], frames[index + 2]);
    }
    if(frame.isSpare()) {
      bonus = self.spareBonus(frame, frames[index + 1]);
    }
    return total + bonus + frame.score();
  }, 0);
};

Game.prototype.strikeBonus = function(frame, framePlus1, framePlus2) {
  var strikeBonus = 0;
  if(framePlus1 === undefined) { return 0; }
  if(framePlus1.isStrike() && framePlus2 !== undefined) {
    strikeBonus = framePlus1.score() + framePlus2._scores[0];
  } else {
    strikeBonus = framePlus1.score();
  }
  return strikeBonus;
}

Game.prototype.spareBonus = function(frame, framePlus1) {
  if(framePlus1 === undefined) { return 0; }
  return framePlus1._scores[0];
}

//
// Game.prototype.score = function() {
//   for(var i = 0; i <= this._frames.length; i++) {
//     this._score += this._frames[i].score();
//     console.log(this._frames[i]);
//   }
//
// }

// Game.prototype.bonusHandler = function(rolls) {
//     var identifier = ["/", 'X'];
//     var checker = this._scorecard.length - (rolls + 1);
//     if(checker >= 0 && this._scorecard[checker] === identifier[rolls - 1]) {
//         for(var i = checker + 1; i <= (checker + rolls); i++) {
//             this._score += parseInt(this._frameScores[i])
//         }
//     }
// }
//
// Game.prototype.spareHandler = function() {
//     var mon = this._scorecard.length - 3
//     if(mon >= 0 && this._scorecard[mon] === '/') {
//         this._score += this._frameScores[mon + 1]
//     }
// }
//
// Game.prototype.isEnded = function() {
//     return this._framesRemaining === 0;
// }
