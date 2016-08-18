var Game = function Game(){
  this.currentFrame = [];
  this.frames = [];
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
    this.strike++
    this.framesUpdate()
    this.refreshCurrentFrame()
    }
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
   var i = this.frames.indexOf([10]);
   this.bonuses =+ this.frameScore(i+1)
}

Game.prototype.spareScore = function(){
  for(var j = 0; j < 10; j++){
    if(this.frameScore(j)===10){
      this.bonuses =+ this.frames[j+1][0]
    }
  }
}

Game.prototype.frameScore = function(num){
    var frameTotal = this.frames[num].reduce(function(prev, curr){
      return prev + curr;
    });
    return frameTotal
  };

Game.prototype.score = function(){
  if (this.frames.length === 10){
    for(var j = 0; j < 10; j++){
      var frameTotal = this.frames[j].reduce(function(prev, curr){
        return prev + curr;
      });
      this.gameTotal.push(frameTotal)
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
  else if (this.spare) {
    this.spareScore()
  }
  this.total = this.total + this.bonuses;
};
