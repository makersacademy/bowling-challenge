function Game() {
  this.scores = [];
};

Game.prototype.viewScore = function(){
  var flatArray = [].concat.apply([], this.scores);
  var sum = flatArray.reduce(function(a, b) {return a + b;}, 0);
  return sum;
};

Game.prototype.gutterGame = function(){
  this.scores = [0];
};

Game.prototype.perfectGame = function(){
  this.scores =[300];
};

Game.prototype.playFrameRoll = function(a, b){
  if (this.scores.length >= 10) {
    throw new Error("Cannot exceed 10 frames");
  } else {
  var frame = new Frame;
  frame.roll1(a);
  frame.roll2(b);
  this.scores.push(frame.score);
  }
};

Game.prototype.playFrameStrike = function(){
  if (this.scores.length >= 10) {
    throw new Error("Cannot exceed 10 frames");
  } else {
  var frame = new Frame;
  frame.strike();
  this.scores.push(frame.score);
  }
};
