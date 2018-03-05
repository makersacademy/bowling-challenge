window.onload = function() {

};

$(document).ready( function() {
  var bowling = new Bowling ();
  pins();
  // gameScore();

  function pins() {
    for (var i = 1; i < 21; i++){
    $('.roll'+ i).text(bowling.rolls[i-1]);
  }
  };

  // function gameScore() {
  //   for (var i = 1; i < 10; i++){
  //   $('.score'+ i).text(bowling.score());
  // }
  // };


  $('.pin1').click( function (){
    bowling.roll(1);
    pins();
    $('.score1').text(bowling.score());

  })

  $('.pin2').click( function (){
    bowling.roll(2);
    pins();
    $('.score2').text(bowling.score());
  })

  $('.pin3').click( function (){
    bowling.roll(3);
    pins();
    $('.score3').text(bowling.score());
  })

  $('.pin4').click( function (){
    bowling.roll(4);
    pins();
    $('.score4').text(bowling.score());
  })

  $('.pin5').click( function (){
    bowling.roll(5);
    pins();
    $('.score5').text(bowling.score());
  })

  $('.pin6').click( function (){
    bowling.roll(6);
    pins();
    $('.score6').text(bowling.score());
  })

  $('.pin7').click( function (){
    bowling.roll(7);
    pins();
    $('.score7').text(bowling.score());
  })

  $('.pin8').click( function (){
    bowling.roll(8);
    pins();
    $('.score8').text(bowling.score());
  })

  $('.pin9').click( function(){
    bowling.roll(9);
    pins();
    $('.score9').text(bowling.score());
  })

  $('.pin10').click( function(){
    bowling.roll(10);
    pins();
    $('.score10').text(bowling.score());
  })


})
