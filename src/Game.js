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

Game.prototype.pushTotalForFrame = function(){
//sum elements of this.frames
for (var i=0; i < 10; i ++){
  this.frameScores.push(this.frames[i].score.sum())
  this.frameNumber = this.frameScores.indexOf(this.frames[i].score.sum())+ 1;
};
};

// Game.prototype.frameValidation = function(frame) {
//   if (frame > 10){throw new Error('This Game is Over!'); }
// };
Game.prototype.applyBonuses = function(){
  for (var i = 0; i < 9; i ++) {
    if(this.frames[i].isSpare()){
      this.bonuses.push(this.frames[i + 1].score[0])}
      this.bonusScore = this.bonuses.sum();
  }
};


};
   //each Game game contains 10 frames
