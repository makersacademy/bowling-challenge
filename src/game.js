// calculates the score of the entire game
function Game() {
  this.MAXFRAMES = 10;
  this.frameCounter = 0;
  this.scoreBoard = [];
}

Game.prototype.addFrame = function(frame) {
  if(frame.strike === true) {
    this.scoreBoard.splice(this.frameCounter, 0, 'X');
  } else if(frame.spare === true) {
    this.scoreBoard.splice(this.frameCounter, 0, "/");
  } else {
    this.scoreBoard.splice(this.frameCounter, 0, (frame.firstRollPins + frame.secondRollPins));
  }

}
