$(document).ready(function(){
  var bowling = new BowlingGame;

  $('.pin').on('click',function(data){
    bowling.throw(data.currentTarget.innerHTML);
    $('#currentFrame').text("Frame Number:" + bowling.currentFrame);
    $('#currentThrow').text("Throw number:" + bowling.currentThrow);
    console.log(bowling.allThrows);
  });
});
