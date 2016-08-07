var Game = function Game(){
  this.currentRoll = 0;
  this.currentFrame = [];
  this.frames = [];
  this.frameTotal = 0
  this.Gametotal = 0;
};

Game.prototype.roll = function(pinsDown){
  this.currentFrame.push(this.currentRoll + pinsDown);
  this.frame()
};
Game.prototype.frame = function(){
  if(this.currentFrame[0] === 10){
    this.frames.push(this.currentFrame)
    this.refreshCurrentFrame()}
  else if(this.currentFrame.length === 2){
    this.frames.push(this.currentFrame)
    this.refreshCurrentFrame() }
};
Game.prototype.refreshCurrentFrame= function(){
  this.currentFrame =[];
};

Game.prototype.score= function(){
  // for(var i = 0; i < 10; i++){
  //   this.gameTotal = this.frames[i].reduce(function(prev, curr){
  //     return prev + curr;
  //   });
    for(var j = 0; j < 10; j++){
      this.frameTotal = this.frames[j].reduce(function(prev, curr){
        return prev + curr;
      })
    }
  // }
}
