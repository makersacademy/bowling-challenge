$(document).ready(function(){
  var bowling = new BowlingGame;

  $('.pin').on('click',function(data){
    bowling.throw(data.currentTarget.innerHTML);
    console.log(bowling.allThrows);
    console.log(data.currentTarget.innerHTML)
  });
});
