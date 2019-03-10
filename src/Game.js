function Game(){
   this.frames = [];
   this.frameScores = [];
   this.frameNumber = 1;
   this.score = 0;
   this.bonuses = [];

Game.prototype.start = function() {
  for (var i=0; i < 10; i ++){
    this.frames[i] = new Frame();
  };
};

Game.prototype.bowl = function(pins_hit){
  this._validateThisBowl(pins);
  if (this.frameNumber === 10) {
    this.frameTenPlay(pins_hit);
  } else if (this.frameNumber !== 10) {
    this.framePlay(pins_hit);
  }
};

Game.prototype.pushTotalForFrame = function(){
for (var i=0; i < 10; i ++){
  this.frameScores.push(this.frames[i].score.sum())
  this.frameNumber = this.frameScores.indexOf(this.frames[i].score.sum())+ 1;
};
};

Game.prototype.totalPoints = function(){
  return(this.bonuses.sum() + this.frameScores.sum())
};

Game.prototype.bonusScores = function(){
  for (var i = 0; i < 10; i ++) {

    if (this.frames[i].isSpare()){
      this.bonuses.push(this.frames[i + 1].score[0])
      this.bonusScore = this.bonuses.sum();
      this.score += this.bonusScore;
    };

    if (this.frames[i].isStrike() && this.frames[i + 1].score[0] !== 10){
      this.bonuses.push(this.frames[i + 1].score.sum());
    };

    if (this.frames[i].isStrike() && this.frames[i + 1].isStrike()) {
        if (this.frames[i + 2] === undefined) {
          return ('bonus not added')
        } else {
          this.bonuses.push(this.frames[i + 1].score[0] + this.frames[i + 2].score[0]);
        };
    }

    else {return ('none'); }
  };
};


};
