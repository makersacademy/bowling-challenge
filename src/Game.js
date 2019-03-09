function Game(){
   this.frames = [];
   this.totalScore = [];

Game.prototype.start = function() {
  for (var i=0; i < 10; i ++){
    this.frames[i] = new Frame();
  };


Game.prototype.pushTotalForFrame = function(){
//sum elements of this.frames
for (var i=0; i < 10; i ++){
  this.totalScore.push(this.frames[i].score.sum())};
};

};

};
   //each Game game contains 10 frames
