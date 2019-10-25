'use strict';

function BowlingScorecard(){
  this.SCORE = 0
  this.FRAMES = [[],[],[],[],[],[],[],[],[],[]]
  this.CURRENTFRAME = 1
  this.CURRENTROLL = 1
  }

  BowlingScorecard.prototype.viewallframes = function(){
  return this.FRAMES
  }

  BowlingScorecard.prototype.calculatescore = function(){
    this.SCORE = 0
    var arrayLength = this.FRAMES.length;
    for (var i = 0; i < arrayLength; i++) {
    this.SCORE = this.SCORE + this.FRAMES[i].POINTS
    };
  };

  BowlingScorecard.prototype.updateframe = function(frame){
    this.FRAMES[this.CURRENTFRAME - 1] = frame
    this.CURRENTFRAME = this.CURRENTFRAME + 1
  }
