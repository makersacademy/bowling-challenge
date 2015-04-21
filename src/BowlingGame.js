function BowlingGame() {
  this.score = 0;
  this.currentFrame = 1;
  this.secondRollOnFrame = false;
  this.frames = [0,0,0,0,0,0,0,0,0,0]; //is frames a keyword?
  this.strikeFrame = null;
  this.takingStrikeBonus = false;
  this.strikeBonusRolls = 0;
  this.strikeFrame2 = null;
  this.takingStrikeBonus2 = false;
  this.strikeBonusRolls2 = 0;
  this.spareFrame = null;
  this.takingSpareBonus = false;
  this.gameOver = false;
  this.tenthFrameRollCount = 0;
};

BowlingGame.prototype.totalScore = function() {
  var score = 0;
  for(i=0;i<this.frames.length;i++) { score += this.frames[i]; };
  return score;
};

// todo refactor
BowlingGame.prototype.enterScore = function(score) {
  if(this.gameOver){ return 'Game is over, can not add score'; };

  if(this.currentFrame === 10) { this.tenthFrame(score); }
  else{
    if(score===10) { this.toggleStrikeBonus(); }; // NOT IF STRIKE IN 10th FRAME
    if(this.takingStrikeBonus) { this.addStrikeBonus(score); };

    this.addSpareBonus(score);
    if(this.frame(this.currentFrame) + score === 10 && score<10) { this.toggleSpareBonus(); };

    this.frames[this.currentFrame-1] += score;
    if(this.secondRollOnFrame === true) { this.currentFrame++; };
    this.secondRollOnFrame = !this.secondRollOnFrame;
  }

  if(this.currentFrame === 11) { this.gameOver = true; };
};

BowlingGame.prototype.tenthFrame = function(score) {
    if(score===10) { this.takingStrikeBonus = true }
    if(this.frames[9] + score === 10 && score<10) { this.takingSpareBonus = true }
    this.frames[9] += score;
    this.tenthFrameRollCount++;

    if(this.tenthFrameRollCount === 3 && (this.takingStrikeBonus || this.takingSpareBonus)){ this.currentFrame++ }
    else if(this.tenthFrameRollCount===2 && this.frames[9] < 10){ this.currentFrame++ }
  };

BowlingGame.prototype.toggleStrikeBonus = function() {
  this.secondRollOnFrame = true; //skip second roll
  this.takingStrikeBonus = true;
  this.strikeBonusRolls = 0;
  this.strikeFrame = this.currentFrame;
};

BowlingGame.prototype.addStrikeBonus = function(score) {
  if(this.strikeBonusRolls < 2 && this.currentFrame != this.strikeFrame) {
    this.frames[this.strikeFrame-1] += score;
    this.strikeBonusRolls++;
  }
  if(this.strikeBonusRolls>=2) {
    this.strikeBonusRolls = 0;
    this.takingStrikeBonus = false;
    this.strikeFrame = null;
  };

    // if(score==10) {
    //   this.strikeFrame2 = this.currentFrame-1;
    //   this.takingStrikeBonus2 = true;
    //   this.toggleStrikeBonus();
    // };
    // if(this.strikeFrame != this.currentFrame) {
    //   this.frames[this.strikeFrame-1] += score;
    //   this.strikeBonusRolls++;
    // }
    // if(this.strikeBonusRolls2 === 2) {
    //   this.takingStrikeBonus2 = false;
    //   this.strikeFrame2 = null;
    //   this.strikeBonusRolls2 = 0;
    // };
    // if(this.takingStrikeBonus2 === true) {
    //   this.frames[this.strikeFrame2-1] += score;
    //   this.strikeBonusRolls2++;
    // };
    // if(this.strikeBonusRolls === 2) {
    //   this.takingStrikeBonus = false;
    //   this.strikeFrame = null;
    // };
};

BowlingGame.prototype.addSpareBonus = function(score) {
  if(this.takingSpareBonus) {
    this.frames[this.spareFrame-1] += score;
    this.takingSpareBonus = false;
    this.spareFrame = null;
  };
};


BowlingGame.prototype.toggleSpareBonus = function() {
  this.takingSpareBonus = true;
  this.spareFrame = this.currentFrame;
};

BowlingGame.prototype.frame = function(frame) {
  return this.frames[frame-1];
};
