'use strict';

  function Game (){
    this.frames = [new Frame(), new Frame(), new Frame(),
                  new Frame(), new Frame(),
                  new Frame(), new Frame(), new Frame(),
                  new Frame(), new Frame()];
    this.totalScore = 0;
  }

  Game.prototype.getFrames = function(){
    return this.frames;
  };

  Game.prototype.getTotalScore = function(){
    return this.totalScore;
  };
