var Game = function(){
  this.framecount = 0;
  this.rollcount = 0;
  this.score = 0;
  this.framescore = 0;
  this.lastroll = 0;
};

Game.prototype.newRoll = function(rollScore) {
  this.countScore(rollScore);
  this.countRoll(rollScore);
  console.log(this);
};

Game.prototype.countRoll = function(rollScore) {
  if (this.rollcount === 1) {
    this.rollcount = 2;
    this.framescore += rollScore;
  } else {
    this.rollcount = 1;
    this.framecount += 1;
    this.framescore = rollScore;
  }
  // this.score += rollScore;
  this.lastroll = rollScore;
};

Game.prototype.countScore = function(rollScore) {
  if(this.framescore === 10) {
    this.score += rollScore*2;
  } else {
    this.score += rollScore;
  }
};






//   if(this.rollcount = 2) {this.framecount += 1};
//   this.rollcount = 1 ? this.rollcount = 2 : this.rollcount = 1;
//   this.score += rollScore;
//   this.lastroll = rollScore;
//   console.log(this);
// };
