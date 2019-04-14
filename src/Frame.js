function Frame() {
  this.STARTING_SCORE = 0
  this.score = this.STARTING_SCORE
  this.firstRoll = 0
  this.secondRoll = 0
  this.pinsStanding = 10
  // this.STARTING_SUBFRAME = 1
  // this.subframe = this.STARTING_SUBFRAME
  // goes up to 2 normally
};

Frame.prototype.rollOne = function(){
this.firstRoll += Math.floor(Math.random() * (10 - 0 + 1)) + 0;
// return this.firstRoll
}

Frame.prototype.rollTwo = function(){
  // this.pinsStanding -= this.firstRoll
//  console.log(this.firstRoll)
// firstRoll not persisted here
this.secondRoll += Math.floor(Math.random() * ((10- this.firstRoll) - 0 + 1)) + 0;


this.score = this.firstRoll + this.secondRoll

// return this.secondRoll
}

Frame.prototype.firstRoll = function(){
  return this.firstRoll 
}

Frame.prototype.secondRoll = function(){
  return this.secondRoll
}



// to pass the test because it needs a function to work 
// but in Game.js it wouldnt work with function!

Frame.prototype.getTotalScore = function(){
// normal situation
this.score = this.firstRoll() + this.secondRoll()
return this.score
}






// had to make these functions to pass the test. could not have just put attributes






