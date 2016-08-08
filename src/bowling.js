'use strict';

function Frame(){
 this.pins = [];
 this.frameIndex = 0;
 this.runningScore = 0;
 this.strike = false;
 this.spare = false;
};

function Bowling(){
  this.frames = [];
  this.frameBalls = 0;
  this.actualBalls = 0;
  this.totalScore = 0;
  this.index = 0;
  this.currentFrame = 0;
  this.previousFrame = new Frame;
  this.secondPrevious = new Frame;

  Bowling.prototype.init = function(){
    for (var i = 0; i < 10; i++) {
      var frame = new Frame;
      frame.frameIndex = i
      this.frames.push(frame)
    };
    this.currentFrame = this.frames[0];
  };
  this.init();

  Bowling.prototype.throw = function(points){
    if (this.isGameOver()){
      throw new Error('End of game');
    }
    else {
      this.addPoints(points);
    }
  }

  Bowling.prototype.addPoints = function(points){
    if (this.isStrike(points)){
      this.strike();
    }
    else if (this.isSpare(points)){
      this.spare(points);
    }
    else {
      this.normalFrame(points);
    }
  };

  Bowling.prototype.normalFrame = function(points){
    this.currentFrame.pins.push(points)
    this.resetBalls();
  };

  Bowling.prototype.resetBalls = function(){
    this.frameBalls++;
    this.actualBalls++;
    this.checkFrame();
  };

  Bowling.prototype.checkFrame = function(){
    if (this.frameBalls % 2 === 0)  {
      this.index++;
      this.scoreBonus();
      this.scoreFrame();
      this.newFrame();
    };
  };

  Bowling.prototype.scoreBonus = function(){
    if (this.previousFrame.strike){
      this.previousFrame.runningScore += this.currentFrame.pins[0];
      this.previousFrame.runningScore += this.currentFrame.pins[1];
      if (this.secondPrevious.strike){
        this.secondPrevious.runningScore += this.currentFrame.pins[0];
      }
    }
    else if (this.previousFrame.spare){
      this.previousFrame.runningScore += this.currentFrame.pins[0];
    };
  };

  Bowling.prototype.scoreFrame = function(){
    this.currentFrame.runningScore += this.previousFrame.runningScore;
    this.currentFrame.runningScore += this.currentFrame.pins[0];
    this.currentFrame.runningScore += this.currentFrame.pins[1];
  }

  Bowling.prototype.newFrame = function(){
    this.secondPrevious = this.previousFrame;
    this.previousFrame = this.currentFrame;
    this.currentFrame = this.frames[this.index];
  };

  Bowling.prototype.isStrike = function(points){
    if (points === 10 && this.frameBalls % 2 === 0){
      return true;
    };
  };

  Bowling.prototype.strike = function(){
    this.currentFrame.pins.push(10);
    this.currentFrame.strike = true;
    this.frameBalls++;
    this.normalFrame(0);
  };

  Bowling.prototype.isSpare = function(points){
    if (this.frameBalls % 2 != 0 && this.currentFrame.pins[0] + points === 10){
      return true;
    };
  };

  Bowling.prototype.spare = function(points){
    this.currentFrame.pins.push(points);
    this.currentFrame.spare = true;
    this.resetBalls();
  };

  Bowling.prototype.isGameOver = function(){
    if (this.index === 10){
      return true;
    }
  };
};
