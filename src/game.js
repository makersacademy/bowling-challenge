function Game() {
  this.frames = [];
  this.totalScore = 0;
}

Game.prototype.addFrame = function(frame){
  this.frames.push(frame);
  this.totalScore = this.score();
  if(this.isOver()) {
    this.frames = [];
    return this.result();
  };
};

Game.prototype.score = function(){
  var totalScore = 0;
  for (var i=0;i<this.frames.length;i++){
    var frame = this.frames[i];
    var frameScore = (frame.throws[0]+frame.throws[1]);
    totalScore += frameScore;
  };
  return totalScore;
};

Game.prototype.isOver = function(){
  return (this.frames.length >= 10);
};

Game.prototype.result = function(){
  return ("Game over - final score is: " + this.totalScore);
};
