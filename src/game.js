var _START_FRAME = []
var points = 0

function Game(){
  this.frame = _START_FRAME;
}

Game.prototype.firstRoll = function(){
  this.frame.push(points);
};
