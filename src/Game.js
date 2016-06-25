'use strict';

function Game(frame){
  this.frames = [];
  for(var i = 0; i <= 9; i++){
    typeof frame === 'undefined' ? this.frames.push(new Frame()) : this.frames.push(frame);
  }
  
  


  
  
};