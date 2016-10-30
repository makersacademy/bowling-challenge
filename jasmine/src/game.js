function Game(){
   this.startgame = true;
   this.startscore = 0;
   this.frames = [];
}

  Game.prototype.startgame = function(){
    return this.startgame;
  };

  Game.prototype.startscore = function(){
    return this.startscore;
  };

  Game.prototype.frames = function(){
    return this.frames;
  };

  Game.prototype.bowl = function(rolls){
    this.frames.push(new Frame(rolls));
  };

  Game.prototype.score = function(){
    return this.frames.reduce(function(total, frame, i, frames){
      return total + frame.totalScore(frames[i+1]);
    }, 0);
  };
