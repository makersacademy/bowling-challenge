
var rollOne;
var rollTwo;

function Frame(rollOne, rollTwo) {
  this.MAX_SCORE = 10,
  this._rolls = [rollOne, rollTwo]
};

Frame.prototype.total = function() {
   var totalScore = 0;
   this._rolls.forEach(function(roll){
     totalScore += roll
   });
   return totalScore
 };


 function Game(){
   this._frames = []
 };

 Game.prototype._buildScore = function() {
   return Math.floor(Math.random() * 11);
 };

 Game.prototype._takeTurn = function() {
   roll = 10;
   anotherRoll = 5;
   this._frames.push(new Frame(roll, anotherRoll));
 };

 Game.prototype._new = function() {
  this._frames = [];
 };

 Game.prototype._getTotal = function() {
   var total = 0;
   this._frames.forEach(function(frame){
     total += frame.total();
   });
   return total;
 };

 Game.prototype.playRound = function() {
   this._new();
   for(i = 0; i <= 9; i++) {
     this._takeTurn();
   };

 };
