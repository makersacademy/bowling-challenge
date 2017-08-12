$(document).ready(function() {
  var game = new bowlingGame();
  // var count = 0;
  var roll = 1;

  $('#Btn0, #Btn1, #Btn2, #Btn3, #Btn4, #Btn5, #Btn6, #Btn7, #Btn8, #Btn9, #Btn10').click(function() {
    // if (count == 0){
    //   game.roll(parseInt($(this).val()));
    //   $('#roll1').text($(this).val());
    //
    // }else{
      game.roll(parseInt($(this).val()));
      $('#roll' + roll).text($(this).val());
    // }
    $('#score11').text(game.score());
    roll += 1;
    // count += 1;
  });

  $('#btn11').click(function() {
    location.reload();
  });

});
