var Roll = require('./roll');

function Game(){
  this.frames = [];
}
Game.prototype.scores = function () {
  this.frames.push(roll.frameScore);
};
