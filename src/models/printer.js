'use strict';

function Printer() {

}

Printer.prototype.printFrameBalls = function (balls, frameNumber) {
  if(frameNumber  < 10){
    if(balls.length === 1){
      if(balls[0] === 10){
        return "X";
      }
      else{
        return balls[0].toString();
      }
    }
    else if(balls.length === 2){
      if(balls[0] === 10){
        return "X";
      }
      else if(balls[0] !== 10 && balls[0] + balls[1] === 10){
        return balls[0].toString() + "|/";
      }
      else{
        return balls[0].toString() + "|" + balls[1].toString();
      }
    }
  }
  else{
    if(balls.length === 1){
      if(balls[0] === 10){
        return "X";
      }
      else{
        return balls[0].toString();
      }
    }
    else if(balls.length === 2){
      if(balls[0] === 10 && balls[1] < 10){
        return "X|" + balls[1].toString();
      }
      else if(balls[0] === 10 && balls[1] === 10){
        return "X|X";
      }
      else if(balls[0] < 10 && balls[0] + balls[1] === 10){
        return balls[0] + "|" + "/";
      }
      else{
        return balls[0].toString() + "|" + balls[1].toString();
      }
    }
    else{
      if(balls[0] === 10 && balls[1] === 10 && balls[2] === 10){
        return "X|X|X";
      }
      else if(balls[0] < 10 && balls[1] < 10 && (balls[0] + balls[1] === 10) && balls[2] === 10){
        return balls[0] + "|/|X";
      }
      else if(balls[0] === 10 && balls[1] === 10 && balls[2] !== 10){
        return "X|X|" + balls[2];
      }
      else{
        return balls[0] + "|/|" + balls[2];
      }
    }
  }
};
