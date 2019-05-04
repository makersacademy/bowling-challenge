'use strict';

function Bowling(){
  this.scores = [];
  this.framerecord = [];
  this.gamerecord = [];
};

Bowling.prototype.knock = function(number){
  this.knockedPins =  number;
  this.recordframe();
};

Bowling.prototype.knockedPins = function(){
  return this.knockedPins 
};

Bowling.prototype.recordframe = function(){
  var numerofFrameRoll = 2;
  
  if (this.framerecord.length == numerofFrameRoll){
    this.framerecord = [];
  }
  this.framerecord.push(this.knockedPins);
  
  if(this.framerecord.reduce(function(total,current){
    return total + current
  },0)> 10){
    throw new Error("Over 10 knock down in one frame")
  }


  if (this.framerecord.length == numerofFrameRoll){
  this.recordgame();
  }

};

Bowling.prototype.framerecord = function(){
  return this.framerecord;
};

Bowling.prototype.recordgame = function(){
  this.gamerecord.push(this.framerecord)
};

Bowling.prototype.gamerecord = function(){
  return this.gamerecord;
};