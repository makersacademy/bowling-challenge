
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
