function Game(){
  this.frames = [new Frame()]
};

Game.prototype.roll = function(number){
  if (this.frames[this.frames.length-1].isComplete() && this.frames.length <10) {
  	this.frames.push(new Frame())
  };
  // console.log(this.frames)
  for (i = 0; i < this.frames.length; i++) {
  	// console.log("for loop in Game.roll: " + i)
  	this.frames[i].roll(number)
  };

};

Game.prototype.score = function(){
	score = 0
 for (i = 0; i < this.frames.length; i++) {
 	// console.log("for loop in Game.score: " + i)
  	score += this.frames[i].score()
  };
  return score
};
