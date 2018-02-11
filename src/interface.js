$(document).ready(function(){
  var bowling = new Game();

  var addScore = function(){

    if (bowling.scoreArray.length <= 21) {

    for (var i = 1; i <= 10; i ++){
      $('#f' + i + 'score').text(bowling.scoreTotal(i));
    }

    for (var j = 0; j < 21; j ++){
      $('.box' + (j+ 1)).text(bowling.screenArray[j]);
    }
  }
  };

  $('#newgame').click(function() {
    location.reload();
  });

  $('#btn0').click(function(){
    bowling.pinsDroppedEachRoll(0);
    addScore();
  });

  $('#btn1').click(function(){
    bowling.pinsDroppedEachRoll(1);
    addScore();
  });

  $('#btn2').click(function(){
    bowling.pinsDroppedEachRoll(2);
    addScore();
  });

  $('#btn3').click(function(){
    bowling.pinsDroppedEachRoll(3);
    addScore();
  });

  $('#btn4').click(function(){
    bowling.pinsDroppedEachRoll(4);
    addScore();
  });

  $('#btn5').click(function(){
    bowling.pinsDroppedEachRoll(5);
    addScore();
  });

  $('#btn6').click(function(){
    bowling.pinsDroppedEachRoll(6);
    addScore();
  });

  $('#btn7').click(function(){
    bowling.pinsDroppedEachRoll(7);
    addScore();
  });

  $('#btn8').click(function(){
    bowling.pinsDroppedEachRoll(8);
    addScore();
  });

  $('#btn9').click(function(){
    bowling.pinsDroppedEachRoll(9);
    addScore();
  });

  $('#btn10').click(function(){
    bowling.pinsDroppedEachRoll(10);
    addScore();
  });
});
