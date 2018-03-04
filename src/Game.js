function Game(){
  this.frames = [];
};

Game.prototype._addFrame = function(frame){
  this.frames.push(frame)
};

Game.prototype.roll = function(roll_one, roll_two){
  frame = new Frame(roll_one, roll_two);
  this._addFrame(frame)
};

Game.prototype.calculateScore = function(){
  var score = 0
  this.frames.forEach( function(frame){
    score += frame.score
  })
  return score
};
