var Game = function Game(){
  this.currentFrame = [];
  this.frames = [];
  this.frameTotal = 0
  this.gameTotal = [];
  this.bonuses = 0;
  this.total = 0;
  this.strike = 0;
  this.spare = 0;
};

Game.prototype.roll = function(pinsDown){
  this.currentFrame.push(pinsDown);
  this.frame()
};
Game.prototype.frame = function(){
  if(this.currentFrame[0] === 10){
    this.framesUpdate()
    this.refreshCurrentFrame()
    this.strike++}
  else if(this.currentFrame.length === 2){
    this.framesUpdate()
    this.refreshCurrentFrame() }
};
Game.prototype.refreshCurrentFrame = function(){
  this.currentFrame =[];
};

Game.prototype.framesUpdate = function(){
  this.frames.push(this.currentFrame);
  this.score();
};

Game.prototype.strikeScore = function(){
  this.bonuses = 4*this.strike;
}

Game.prototype.frameScore = function(num){
    this.frameTotal = this.frames[num].reduce(function(prev, curr){
      return prev + curr;
    });
  };

Game.prototype.score = function(){
  if (this.frames.length === 10){
    for(var j = 0; j < 10; j++){
      this.frameTotal = this.frames[j].reduce(function(prev, curr){
        return prev + curr;
      });
      this.gameTotal.push(this.frameTotal)
    }
    for(var i = 0; i < 10; i++){
      this.total = this.gameTotal.reduce(function(prev, curr){
        return prev + curr;
      })
    }
  }
  this.finalScore();
};

Game.prototype.finalScore = function (){
  if (this.strike){
    this.strikeScore();}
  this.total = this.total + this.bonuses;
};
