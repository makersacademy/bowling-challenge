'use strict';

function Game(){
  this.Score = 0;
  this.BowlCount = 0;
  this.FrameCount = 0;}

  Game.prototype.Bowl = function (){
    this.BowlCount += 1
    this._FrameCount();
    var result = this._randNum();
    this.Score += result;
    return result;
  };

  Game.prototype._randNum = function (){
    return Math.floor(Math.random() * 10) + 1; 
  };

  Game.prototype._FrameCount = function (){
    if(this.BowlCount % 2 === 0) {
      console.log(this.BowlCount);
      this.FrameCount = this.BowlCount / 2;
    }
  };
  
