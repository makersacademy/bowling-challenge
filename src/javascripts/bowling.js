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
  if(rollScore > 10 || (this.framescore + rollScore > 10) && (this.lastroll != 10) && (this.rollcount === 1)) {
    return "Number of pins hit cannot exceed 10";
  }
  this.countFrameScore(rollScore);
  this.countGameScore(rollScore);
  this.countRoll(rollScore);
  this.lastroll = rollScore;
  this.bonusCheck();
  console.log(this);
};

Game.prototype.countRoll = function(rollScore) {
  if(this.framecount === 10 && this.rollcount === 2){
    this.rollcount = 3;
  } else if(this.framecount === 10 && this.lastroll === 10) {
    this.rollcount = 2;
  } else if( this.lastroll === 10 || this.rollcount !== 1) {
    this.rollcount = 1;
    this.framecount += 1;
  } else {
    this.rollcount = 2;
  }
};

Game.prototype.countFrameScore = function(rollScore) {
  if (this.rollcount != 1 || this.lastroll == 10) {
    this.framescore = rollScore;
  } else {
    this.framescore += rollScore;
  }
};

Game.prototype.countGameScore = function(rollScore) {
  if(this.strikebonus1 === true && this.strikebonus2 === true && this.framecount !== 10){
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
  if(this.framecount === 10 && this.rollcount === 2) {
    this.strikebonus1 = false;
  }
  else if(this.lastroll == 10) {
    this.strikebonus1 = true;
  } else {
    this.strikebonus1 = false;
  }
};

Game.prototype.strikebonus2check = function() {
  if(this.framecount === 10 && this.rollcount === 2) {
    this.strikebonus2 = false;
  } else if(this.strikebonus1 === true) {
    this.strikebonus2 = true;
  } else {
    this.strikebonus2 = false;
  }
};

Game.prototype.sparebonuscheck = function() {
  if(this.framescore === 10 && this.rollcount === 2 && this.framecount !== 10) {
    this.sparebonus = true;
  } else {
    this.sparebonus = false;
  }
};
