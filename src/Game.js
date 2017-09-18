/*jshint esversion: 6 */

function Game(player) {
    this.player = player;
    this.scoreSheet = [null,null,null,null,null,null,null,null,null,null]
    this.frameNumber = 0
}

Game.prototype.saveFrame = function(frame, frameNumber) {
  if (frame.tally() === 10) {
    this.scoreSheet.splice(frameNumber-1,1,frame.bonus);
  } else {
    // var score = frame.tally();
    this.scoreSheet.splice(frameNumber-1,1,frame.tally());
  }
}

Game.prototype.currentScore = function(frameNumber){
  var flatArray = [].concat.apply([], this.scoreSheet)
  var sum = flatArray.reduce((a,b) => a + b);
  return sum;
}

// Game.prototype.inSpare = function(frameNumber){
//   if (this.scoresheet[frameNumber] === "spare") {
//     console.log("next roll gets a spare bonus")
//   } else if ((this.scoresheet[frameNumber-2] === "strike")) {
//     console.log("next roll gets a STRIKE bonus")
//   } else {
//     console.log("no current bonus")
//   }
// }
