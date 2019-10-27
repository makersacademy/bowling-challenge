'use strict';

function BowlingScorecard(){
  this.SCORE = 0
  this.FRAMES = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]
  this.CURRENTFRAME = 1
  this.CURRENTROLL = 1
  }

  BowlingScorecard.prototype.viewallframes = function(){
  return this.FRAMES
  }

  BowlingScorecard.prototype.updatescore = function(){
    this.SCORE = 0
    for (var i = 0; i < this.CURRENTFRAME - 1; i++) {
    this.SCORE = this.SCORE + this.FRAMES[i].POINTS
    };
  };

  BowlingScorecard.prototype.updatecurrentframe = function(frame){
    this.FRAMES[this.CURRENTFRAME - 1] = frame
    this.CURRENTFRAME++
  }
