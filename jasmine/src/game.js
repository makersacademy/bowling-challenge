function Game(){
   this.startgame = true;
   this.startscore = 0;
   this._frames = [];
}

  Game.prototype.startgame = function(){
    return this.startgame;
  };

  Game.prototype.startscore = function(){
    return this.startscore;
  };

  Game.prototype.frames = function(){
    return this._frames;
  };
