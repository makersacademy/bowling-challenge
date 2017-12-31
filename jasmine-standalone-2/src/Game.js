Array.prototype.last = function(){
  return this[this.length-1]
}

function Game(){
  this.frames = [new Frame()]
};

Game.prototype.roll = function(number){

  if (this.frames.last().isComplete() && this.frames.length <10) {
  	this.frames.push(new Frame())
  };

  this.frames.forEach(function(frame){
    frame.roll(number);
  });

};

Game.prototype.score = function(){

	score = 0

  this.frames.forEach(function(frame){
  	score += frame.score();
  });

  return score
};
