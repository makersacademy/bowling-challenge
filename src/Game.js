
function Game(){

  this.frameScores = [];
  this.frameNumber = 0;

}

Game.prototype.playFrame = function(){
  this.frameNumber += 1;
  frame = new Frame;
};
module.exports = Game;
