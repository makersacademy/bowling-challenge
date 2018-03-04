window.onload = function() {

};

$(document).ready( function() {
  var bowling = new Bowling ();
  var afteroll = function(){
    for (var i = 1; i <= 21; i ++){
      $('.roll' + i).text(bowling.roll());
    };
  };

  $('.pin1').click( function (){
    bowling.roll(1);
    afteroll();
  })

  $('.pin2').click( function (){
    bowling.roll(2);
    afteroll();
  })

  $('.pin3').click( function (){
    bowling.roll(3);
    afteroll();
  })

  $('.pin4').click( function (){
    bowling.roll(4);
    afteroll();
  })
  $('.pin5').click( function (){
    bowling.roll(5);
    afteroll();
  })

  $('.pin6').click( function (){
    bowling.roll(6);
    afteroll();
  })

  $('.pin7').click( function (){
    bowling.roll(7);
    afteroll();
  })

  $('.pin8').click( function (){
    bowling.roll(8);
    afteroll();
  })

  $('.pin9').click( function(){
    bowling.roll(9):
    afteroll();
  })

  $('.pin10').click( function(){
    bowling.roll(10);
    afteroll;
  })


})
