function BowlingGame() {
  this.score = 0;
  this.currentFrame = 1;
  this.secondRollOnFrame = false;
  this.frames = [0,0,0,0,0,0,0,0,0,0]; //is frames a keyword?
  this.strikeFrame = null;
  this.takingStrikeBonus = false;
  this.spareFrame = null;
  this.takingSpareBonus = false;
}

// todo refactor
BowlingGame.prototype.enterScore = function(score) {
  if(this.takingStrikeBonus) {
    this.frames[this.strikeFrame-1] += score;
    if(this.secondRollOnFrame) {
      this.takingStrikeBonus = false;
      this.strikeFrame = null;
    };
  };

  if(this.takingSpareBonus) {
    this.frames[this.spareFrame-1] += score;
    this.takingSpareBonus = false;
    this.spareFrame = null;
  };

  if(score===10) {
    this.secondRollOnFrame = true; //skip second roll
    this.takingStrikeBonus = true;
    this.strikeFrame = this.currentFrame;
    };
  if(this.frame(this.currentFrame) + score === 10 && score<10) {
    this.takingSpareBonus = true;
    this.spareFrame = this.currentFrame;
    };
  this.frames[this.currentFrame-1] += score;
  if(this.secondRollOnFrame === true) { this.currentFrame++; };
  this.secondRollOnFrame = !this.secondRollOnFrame;

};

BowlingGame.prototype.frame = function(frame) {
  return this.frames[frame-1];
};
