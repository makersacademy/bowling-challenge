
var rollOne;
var rollTwo;

MAX_PINS = 10;

function Frame(rollOne, rollTwo) {

  this.MAX_PINS = 10,
  this._rolls = [rollOne, rollTwo]
};

Frame.prototype.regularScore = function() {
   var totalScore = 0;
   this._rolls.forEach(function(roll){
     totalScore += roll
   });
   return totalScore
 };

 Frame.prototype.isIllegal = function(){
   return this._rolls[0] + this._rolls[1] > MAX_PINS
 };


 Frame.prototype.isStrike = function(){
   return this._rolls[0] === MAX_PINS
 };

 Frame.prototype.isSpare = function(){
   return this._rolls[0] + this._rolls[1] === MAX_PINS
 };

 Frame.prototype.spareScore = function(nextFrame){
   return this.regularScore() + nextFrame._rolls[0];
 };

 Frame.prototype.strikeScore = function(nextFrame, thirdFrame){
   if (nextFrame.isStrike()) {
   return this.regularScore() + nextFrame.regularScore() + thirdFrame._rolls[0]
 } else {
   return this.regularScore() + nextFrame.regularScore()
 }
 };


Frame.prototype.totalScore = function(nextFrame, thirdFrame) {
  if (this.isStrike()) {
    return this.strikeScore(nextFrame, thirdFrame);
  } else if (this.isSpare()) {
    return this.spareScore(nextFrame);
  } else {
    return this.regularScore();
  }
};



 function Game(){
   this._frames = [],
   this.MAX_FRAME = 10
 };

 Game.prototype._new = function() {
  this._frames = [];
 };

 Game.prototype._gameSpan = function() {
   return this.MAX_FRAME;
 };

}

Game.prototype.roll = function(rolls) {
    var frame = new Frame(rolls);
    this.checkRollIsLegal(frame);
    this.checkGame();
    this._frames.push(frame);
  },

 Game.prototype.checkRollIsLegal = function(frame) {
  if (frame.isIllegal()) {
    throw new Error("That cannot be!")
  }
}

Game.prototype.checkGame = function(frame) {
 if (this.isFinished()) {
   throw new Error("Game's done!")
 }
}

Game.prototype.isFinished = function(frame) {
    return this._frames.length >= this.MAX_FRAME
}
