function Game() {
  this.STARTING_SCORE = 0
  this.score = this.STARTING_SCORE
  this.STARTING_FRAME = 0.5
  this.framecount = this.STARTING_FRAME
  var gameOver = false;
  this.frames = []
  this.roll = 1

};

Game.prototype.getCurrentScore = function(){
  return this.score
};


Game.prototype.getCurrentFrame = function(){
  return this.framecount
};

// main event
Game.prototype.bowl = function(){
  // calculates count
  this.framecount += 0.5
  
  if (Number.isInteger(this.framecount)){
    frame = new Frame()
    frame.rollOne()
    this.frames.push(frame)
    this.roll = 1
    // this.score += frame.score
    // adds score from new frame
  } else {

    console.log(this.frames)
    let lastframe = this.frames.slice(-1)[0]
    lastframe.rollTwo()
    // this.frames.slice(-1)[0].getTotalScore()
    this.roll = 2
    this.score += lastframe.score
  }


// add to existing frame







}

// Game.prototype.knockdown= function(){
//   return Math.floor(Math.random() * (10 - 0 + 1)) + 0;
// }

// initiate another class for frame and calculate score there

// Game.prototype.addFramescore= function(frame){
//   this.score += 

// }






