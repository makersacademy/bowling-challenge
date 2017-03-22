'use strict';
var bowling = new BowlingGame();
$(document).ready(function(){
  var rollIndex = 1;
  var frameCount = 1;
  var rollCount = 1;

  var disableButtons = function(n){
      for(var i = 10; i>(10-n);i--){
        $('#pin'+i).attr('disabled', true);
        $('#pin'+i).css('color', 'white');
        $('#pin'+i).css('background-color', 'black');
      }
  }
  var enableButtons = function(){
    for(var i = 0; i<=10;i++){
      $('#pin'+i).attr('disabled', false);
      $('#pin'+i).css('color', 'black');
      $('#pin'+i).css('background-color', 'lightgrey');
    }
  }
  var count = function(n){
    if (n<10){
      if (rollCount < 2) {
        enableDissable(n);
        rollCount++
      } else {
        enableDissable(n);
        rollCount = 1;
      }
    } else {
      rollCount = 1;
      enableButtons();
    }
    console.log('count:'+rollCount);
  }
  var enableDissable = function(n){
    if ( rollCount === 1) {
      console.log("Disabling Buttons");
      disableButtons(n);
    } else {
      console.log('Enabling Buttons');
      enableButtons();
    }
  }

  $('#new-game').click(function(){
    location.reload();
  });

  $('#pin0').click(function(){
    $("#roll"+rollIndex+"-score").html('0');
    rollIndex++
    // enableDissable(0);
    count(0);
    bowling.roll(0);

  });

  $('#pin1').click(function(){
    $("#roll"+rollIndex+"-score").html('1');
    rollIndex++;
    // enableDissable(1);
    count(1);
    bowling.roll(1);
  });

  $('#pin2').click(function(){
    $("#roll"+rollIndex+"-score").html('2');
    rollIndex++;
    bowling.roll(2);
    count(2);
  });

  $('#pin3').click(function(){
    $("#roll"+rollIndex+"-score").html('3');
    rollIndex++;
    count(3);
    bowling.roll(3);
  });

  $('#pin4').click(function(){
    $("#roll"+rollIndex+"-score").html('4');
    rollIndex++;
    count(4);
    bowling.roll(4);
  });

  $('#pin5').click(function(){
    $("#roll"+rollIndex+"-score").html('5');
    rollIndex++;
    count(5);
    bowling.roll(5);
  });

  $('#pin6').click(function(){
    $("#roll"+rollIndex+"-score").html('6');
    rollIndex++;
    count(6);
    bowling.roll(6);
    // disableButtons(6);
  });

  $('#pin7').click(function(){
    $("#roll"+rollIndex+"-score").html('7');
    rollIndex++;
    count(7);
    bowling.roll(7);
    // disableButtons(7);
  });

  $('#pin8').click(function(){
    $("#roll"+rollIndex+"-score").html('8');
    rollIndex++;
    count(8);
    bowling.roll(8);
    // disableButtons(8);
  });

  $('#pin9').click(function(){
    $("#roll"+rollIndex+"-score").html('9');
    rollIndex++;
    count(9);
    bowling.roll(9);
    // disableButtons(9);
  });

  $('#pin10').click(function(){
    $("#roll"+rollIndex+"-score").html('10');
    if (rollCount == 1){
      rollIndex++;
      rollIndex++;
    } else {
      rollIndex++;
    }
    count(10);
    bowling.roll(10);
    // disableButtons(10);
  });

});   //  Interface ready function
