function BowlingGame() {
  this.score = 0;
  this.currentFrame = 1;
  this.secondRollOnFrame = false;
  this.frames = [0,0,0,0,0,0,0,0,0,0]; //is frames a keyword?
  this.strikeFrame = null;
  this.takingStrikeBonus = false;
  this.spareFrame = null;
  this.takingSpareBonus = false;
  this.gameOver = false;
}

BowlingGame.prototype.totalScore = function() {
  var score = 0;
  for(i=0;i<this.frames.length;i++) { score += this.frames[i]; };
  return score;
};

// todo refactor
BowlingGame.prototype.enterScore = function(score) {
  if(this.gameOver){ return 'Game is over, can not add score'; };

  this.addStrikeBonus(score);
  this.addSpareBonus(score);
  if(score===10 && this.currentFrame != 10) { this.toggleStrikeBonus(); }; // NOT IF STRIKE IN 10th FRAME
  if(this.frame(this.currentFrame) + score === 10 && score<10) { this.toggleSpareBonus(); };

  this.frames[this.currentFrame-1] += score;
  if(this.secondRollOnFrame === true && this.currentFrame != 10) { this.currentFrame++; };
  this.secondRollOnFrame = !this.secondRollOnFrame;

  if(this.currentFrame === 10) {
    if(!this.takingSpareBonus && !this.takingStrikeBonus) { this.gameOver = true; };
    };
};

BowlingGame.prototype.addStrikeBonus = function(score) {
  if(this.takingStrikeBonus) {
    if(score==10) { this.frames[this.strikeFrame-1] += 10; };
    this.frames[this.strikeFrame-1] += score;
    if(this.secondRollOnFrame) {
      this.takingStrikeBonus = false;
      this.strikeFrame = null;
    };
  };
};

BowlingGame.prototype.addSpareBonus = function(score) {
  if(this.takingSpareBonus) {
    this.frames[this.spareFrame-1] += score;
    this.takingSpareBonus = false;
    this.spareFrame = null;
  };
};

BowlingGame.prototype.toggleStrikeBonus = function() {
  this.secondRollOnFrame = true; //skip second roll
  this.takingStrikeBonus = true;
  this.strikeFrame = this.currentFrame;
};

BowlingGame.prototype.toggleSpareBonus = function() {
  this.takingSpareBonus = true;
  this.spareFrame = this.currentFrame;
};

BowlingGame.prototype.frame = function(frame) {
  return this.frames[frame-1];
};
