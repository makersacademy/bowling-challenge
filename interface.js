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
    }else if (buttonValue == 1 && (roll % 2) == 1) {
      $('#Btn10').not($(this)).prop('disabled', true);
      roll += 1;
    }else if (buttonValue == 2 && (roll % 2) == 1) {
      $('#Btn10, #Btn9').not($(this)).prop('disabled', true);
      roll += 1;
    }else if (buttonValue == 3 && (roll % 2) == 1) {
      $('#Btn10, #Btn9, #Btn8').not($(this)).prop('disabled', true);
      roll += 1;
    }else if (buttonValue == 4 && (roll % 2) == 1) {
      $('#Btn10, #Btn9, #Btn8, #Btn7').not($(this)).prop('disabled', true);
      roll += 1;
    }else if (buttonValue == 5 && (roll % 2) == 1) {
      $('#Btn10, #Btn9, #Btn8, #Btn7, #Btn6').not($(this)).prop('disabled', true);
      roll += 1;
    }else if (buttonValue == 6 && (roll % 2) == 1) {
      $('#Btn10, #Btn9, #Btn8, #Btn7, #Btn6, #Btn5').prop('disabled', true);
      roll += 1;
    }else if (buttonValue == 7 && (roll % 2) == 1) {
      $('#Btn10, #Btn9, #Btn8, #Btn7, #Btn6, #Btn5, #Btn4').prop('disabled', true);
      roll += 1;
    }else if (buttonValue == 8 && (roll % 2) == 1) {
      $('#Btn10, #Btn9, #Btn8, #Btn7, #Btn6, #Btn5, #Btn4, #Btn3').prop('disabled', true);
      roll += 1;
    }else if (buttonValue == 9 && (roll % 2) == 1) {
      $('#Btn10, #Btn9, #Btn8, #Btn7, #Btn6, #Btn5, #Btn4, #Btn3, #Btn2').prop('disabled', true);
      roll += 1;
    }else{
      $('#Btn10, #Btn9, #Btn8, #Btn7, #Btn6, #Btn5, #Btn4, #Btn3, #Btn2, #Btn1').not($(this)).prop('disabled', false);
      roll += 1;
    }
  });

  $('#btn11').click(function() {
    location.reload();
  });

});
