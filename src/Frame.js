'use strict';

function Frame(id){
  this.id = id;
  this.totalFrame = [];
}

Frame.prototype.inputBowls = function(first, second) {
  var pins = first + second
  this.checkNumberOfPins(pins);
  this.totalFrame.push(first, second);
};

// Frame.prototype.addToGame = function() {
//   var game = new Game();
//   game.frames.push(this.totalFrame);
// };

// Frame.prototype.inputSecondBowl = function(pins) {
//   this.checkNumberOfPins(pins);
//   this.totalFrame.push(pins);
// };

Frame.prototype.checkNumberOfPins = function(pins) {
  if (pins > 10) { throw new Error ("Score cannot be over 10"); }
};

Frame.prototype.isStrike = function(pins) {
  return pins === 10 ? true : false;
};

Frame.prototype.isSpare = function() {
  return this.totalFrame.reduce(function (first, second){
    return first + second === 10 ? true : false;
  });
};
