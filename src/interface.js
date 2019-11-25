
$(document).ready(function(){
  var bowling = new Bowling();

  $("#fm1_r1_addScore").click(function(){
    bowling.increaseScore();
    $('#fm1_r1_pinsKnocked').text(bowling._score);
  });

  $("#fm1_r1_reduceScore").click(function(){
    bowling.decreaseScore();
    $('#fm1_r1_pinsKnocked').text(bowling._score);
  });

  $("#fm1_r2_addScore").click(function(){
    bowling.increaseScore();
    $('#fm1_r2_pinsKnocked').text(bowling._score);
  });

  $("#fm1_r2_reduceScore").click(function(){
    bowling.decreaseScore();
    $('#fm1_r2_pinsKnocked').text(bowling._score);
  });

  $("#fm2_r1_addScore").click(function(){
    bowling.increaseScore();
    $('#fm2_r1_pinsKnocked').text(bowling._score);
  });

  $("#fm2_r1_reduceScore").click(function(){
    bowling.decreaseScore();
    $('#fm2_r1_pinsKnocked').text(bowling._score);
  });

  $("#fm2_r2_addScore").click(function(){
    bowling.increaseScore();
    $('#fm2_r2_pinsKnocked').text(bowling._score);
  });

  $("#fm2_r2_reduceScore").click(function(){
    bowling.decreaseScore();
    $('#fm2_r2_pinsKnocked').text(bowling._score);
  });

  function updateScore(){
    $('#fpinsKnocked').text(bowling._score);
  };

});
