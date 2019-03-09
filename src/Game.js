function Game(){
   this.frames = [];
   this.totalScore = [];
   this.frameNumber = 1;

Game.prototype.start = function() {
  for (var i=0; i < 10; i ++){
    this.frames[i] = new Frame();
  };


Game.prototype.pushTotalForFrame = function(){
//sum elements of this.frames
for (var i=0; i < 10; i ++){
  this.totalScore.push(this.frames[i].score.sum())};
  this.frameNumber +=1;
};

};

};
   //each Game game contains 10 frames
