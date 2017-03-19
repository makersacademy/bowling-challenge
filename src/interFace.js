'use strict';
var bowling = new BowlingGame();
$(document).ready(function(){

  var disableButtons = function(n){

    for(var i = 10; i>(10-n);i--){
      $('#pin'+i).attr('disabled', true);
      $('#pin'+i).css('color', 'white');
      $('#pin'+i).css('background-color', 'black');
  }
}

  $('#new-game').click(function(){
    location.reload();
  });
  $('#pin0').click(function(){
    bowling.roll(0);
    disableButtons(0);


  });
  $('#pin1').click(function(){
    bowling.roll(1);
    disableButtons(1);
    // $('#pin1').text('one')
    //$('#pin1').attr('disabled', true);
  });
  $('#pin2').click(function(){
    bowling.roll(2);
    disableButtons(2);

  });
  $('#pin3').click(function(){
    bowling.roll(3);
    disableButtons(3);

  });
  $('#pin4').click(function(){
    bowling.roll(4);
    disableButtons(4);

  });
  $('#pin5').click(function(){
    bowling.roll(5);
    disableButtons(5);

  });
  $('#pin6').click(function(){
    bowling.roll(6);
    disableButtons(6);

  });
  $('#pin7').click(function(){
    bowling.roll(7);
    disableButtons(7);

  });
  $('#pin8').click(function(){
    bowling.roll(8);
    disableButtons(8);

  });
  $('#pin9').click(function(){
    bowling.roll(9);
    disableButtons(9);

  });
  $('#pin10').click(function(){
    bowling.roll(10);
    disableButtons(10);

  });

});   //  Interface ready function
