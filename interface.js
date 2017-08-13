$(document).ready(function() {
  var game = new bowlingGame();
  var roll = 1;

  $('#Btn0, #Btn1, #Btn2, #Btn3, #Btn4, #Btn5, #Btn6, #Btn7, #Btn8, #Btn9, #Btn10').click(function() {
    var buttonValue = parseInt($(this).val());

    game.roll(buttonValue);
    $('#roll' + roll).text(buttonValue);
    $('#score11').text(game.score());
    if (buttonValue == 10 && roll < 19) {
      roll += 2;
    }else{
    roll += 1;
    }
  });

  $('#btn11').click(function() {
    location.reload();
  });

});
