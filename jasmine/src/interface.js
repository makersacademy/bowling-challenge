window.onload = function() {

};

$(document).ready(function() {
  $('.pin1').css("background-color", "white");

  var bowling = new Bowling();

  function pins() {
    for (var i = 0; i < 21; i++) {
      $('.roll' + i).text(bowling.rolls[i-1]);
    }
  };

  function score() {
    for (var i = 0; i < 2; i++) {
      $('.score'+ i).text(bowling.score());
    }
  };

  $('.pin1').click(function() {
    bowling.roll(1);
    pins();
    score();
  });

  $('.pin2').click(function() {
    bowling.roll(2);
    pins();
    score();
  })

  $('.pin3').click(function() {
    bowling.roll(3);
    pins();
    score();
  })

  $('.pin4').click(function() {
    bowling.roll(4);
    pins();
    score();
  })

  $('.pin5').click(function() {
    bowling.roll(5);
    pins();
    score();
  })

  $('.pin6').click(function() {
    bowling.roll(6);
    pins();
    score();
  })

  $('.pin7').click(function() {
    bowling.roll(7);
    pins();
    score();
  })

  $('.pin8').click(function() {
    bowling.roll(8);
    pins();
    score();
  })

  $('.pin9').click(function() {
    bowling.roll(9);
    pins();
    score();
  })

  $('.pin10').click(function() {
    bowling.roll(10);
    pins();
    score();
  })

})
