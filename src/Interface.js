'use strict'

$(document).ready(function() {
  var game = new Game ();

  var seeScore = function() {
    $('#score').text(game.score());
  }

  $('#btn0').click(function(){
    game.roll(0);
      seeScore();
  });

  $('#btn1').click(function(){
    game.roll(1);
      seeScore();
  });

  $('#btn2').click(function(){
    game.roll(2);
      seeScore();
  });

  $('#btn3').click(function(){
    game.roll(3);
      seeScore();
  });

  $('#btn4').click(function(){
    game.roll(4);
      seeScore();
  });

  $('#btn5').click(function(){
    game.roll(5);
      seeScore();
  });

  $('#btn6').click(function(){
    game.roll(6);
      seeScore();
  });

  $('#btn7').click(function(){
    game.roll(7);
      seeScore();
  });

  $('#btn8').click(function(){
    game.roll(8);
      seeScore();
  });

  $('#btn9').click(function(){
    game.roll(9);
      seeScore();
  });

  $('#btn10').click(function(){
    game.roll(10);
      seeScore();
  });

});
