var Game = function(){
  this.framecount = 0;
  this.rollcount = 0;
  this.score = 0;
  this.framescore = 0;
  this.lastroll = 0;
  this.strikebonus1 = false;
  this.strikebonus2 = false;
  this.sparebonus = false;
};

Game.prototype.newRoll = function(rollScore) {
  this.countScore(rollScore);
  this.countRoll(rollScore);
  this.bonusCheck();
  console.log(this);
};

Game.prototype.countRoll = function(rollScore) {
  if (this.rollcount != 1 || this.lastroll == 10) {
    this.rollcount = 1;
    this.framecount += 1;
    this.framescore = rollScore;
  } else {
    this.rollcount = 2;
    this.framescore += rollScore;
  }
  this.lastroll = rollScore;
};

Game.prototype.countScore = function(rollScore) {
  if(this.strikebonus1 === true && this.strikebonus2 === true){
    this.score += rollScore*3;
  } else if(this.sparebonus === true || this.strikebonus1 === true || this.strikebonus2 === true) {
    this.score += rollScore*2;
  } else {
    this.score += rollScore;
  }
};

Game.prototype.bonusCheck = function() {
  this.sparebonuscheck();
  this.strikebonus2check();
  this.strikebonus1check();
};

Game.prototype.strikebonus1check = function() {
  if(this.lastroll == 10) {
    this.strikebonus1 = true;
  } else {
    this.strikebonus1 = false;
  }
};

Game.prototype.strikebonus2check = function() {
  if(this.strikebonus1 === true) {
    this.strikebonus2 = true;
  }
};

Game.prototype.sparebonuscheck = function() {
  if(this.framescore === 10 && this.rollcount === 2) {
    this.sparebonus = true;
  }
};

//
//
//   } else if(this.strikeroll1 === true) {
//     this.strikeroll2 = true;
//     this.strikeroll1 = false;
//   } else {
//     this.strikeroll1 = false;
//     this.strikeroll2 = false;
//   }
// };


// if (this.rollcount == 1) {
//   this.rollcount = 2;
//   this.framescore += rollScore;
// } else if(this.rollcount != 1 || this.lastroll == 10) {
//   this.rollcount = 1;
//   this.framecount += 1;
//   this.framescore = rollScore;

// this.score += rollScore;



//   if(this.rollcount = 2) {this.framecount += 1};
//   this.rollcount = 1 ? this.rollcount = 2 : this.rollcount = 1;
//   this.score += rollScore;
//   this.lastroll = rollScore;
//   console.log(this);
// };
