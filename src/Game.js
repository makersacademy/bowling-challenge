/*jshint esversion: 6 */

function Game(player) {

    this.player = player;
    this.scoreSheet = [[],[],[],[],[],[],[],[],[],[]]
    this.frameNumber = 0

}

Game.prototype.save = function(frameScore, frameNumber) {
  var pins = [frameScore.roll1, frameScore.roll2];
  // var pins = [3,4];
  this.scoreSheet.splice(frameNumber-1,1,pins);
}

Game.prototype.currentScore = function(){
  var flatArray = [].concat.apply([], this.scoreSheet)
  var sum = flatArray.reduce((a,b) => a + b);
  return sum;
}
