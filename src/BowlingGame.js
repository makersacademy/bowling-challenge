var BowlingGame = function(){
  this.score = 0;
  this.frame = 0;
  this.allRolls = [[],[],[],[],[],[],[],[],[],[]];
  this.allFrames = [0,0,0,0,0,0,0,0,0,0];
};

BowlingGame.prototype.roll = function(pins) {
  if (pins > 10) {
    throw new Error("Illegal throw");
  };
  
  if(this.frame > 0 && this.allFrames[(this.frame - 1)][0] == 10) {
    this.addBonus(pins);
  };

  this.score += pins;
  this.allFrames[this.frame] += pins;

  this.allRolls[this.frame].push(pins);

  if (pins == 10 && this.allRolls[this.frame].length == 1) {
    this.allRolls[this.frame].push(0);
  };

  if (this.allRolls[this.frame].length >= 2) {
    this.frame ++;
  };

};

BowlingGame.prototype.addBonus = function(pins) {
  this.allFrames[(this.frame - 1)] += pins;
  this.score += pins;
};
