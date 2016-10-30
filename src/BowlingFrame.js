'use strict';

function BowlingFrame(){

  this.first_ball = 0;
  this.second_ball = 0;

  this.current_ball = 'first'

}

BowlingFrame.prototype.addScore = function(points){
  if (this.current_ball === 'first') {
    this.first_ball = points;
    this.current_ball = 'second';
  } else {
    this.second_ball = points;
  }
}
