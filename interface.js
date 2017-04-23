$(document).ready(function() {
  var game = new Game();

  $('#pin1').click(function(){
  game.roll(1);
  updateFrame(1);
  });

  $('#pin2').click(function(){
  game.roll(2);
  updateFrame(2);
  });

  $('#pin3').click(function(){
  game.roll(3);
  updateFrame(3);
  });

  $('#pin4').click(function(){
  game.roll(4);
  updateFrame(4);
  });

  $('#pin5').click(function(){
  game.roll(5);
  updateFrame(5);
  });

  $('#pin6').click(function(){
  game.roll(6);
  updateFrame(6);
  });

  $('#pin7').click(function(){
  game.roll(7);
  updateFrame(7);
  });

  $('#pin8').click(function(){
  game.roll(8);
  updateFrame(8);
  });

  $('#pin9').click(function(){
  game.roll(9);
  updateFrame(9);
  });

  $('#pin10').click(function(){
  game.roll(10);
  updateFrame(10);
  });

  function updateFrame(pins) {
    $('#r' + game.rolls).text(pins);
    updateTotalScore();
  }

  function updateTotalScore() {
    $('#total-score').text(game.totalScore);
  }

});
